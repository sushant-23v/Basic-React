const pageModules = import.meta.glob('../pages/**/*.jsx');

function createRouteNode(rawSegment = '', pathSegment = null) {
  return {
    rawSegment,
    pathSegment,
    children: new Map(),
    indexModule: null,
    layoutModule: null,
    notFoundModule: null,
    pageModule: null,
  };
}

function isRouteGroup(segment) {
  return /^\(.+\)$/.test(segment);
}

function isCatchAllSegment(segment) {
  return /^\[\.\.\.[^/[\]]+\]$/.test(segment);
}

function isOptionalCatchAllSegment(segment) {
  return /^\[\[\.\.\.[^/[\]]+\]\]$/.test(segment);
}

function isDynamicSegment(segment) {
  return /^\[[^/[\].]+\]$/.test(segment);
}

function isIgnoredSegment(segment) {
  return segment.startsWith('_');
}

function getPathSegment(segment) {
  if (isRouteGroup(segment)) {
    return null;
  }

  if (isCatchAllSegment(segment) || isOptionalCatchAllSegment(segment)) {
    return '*';
  }

  if (isDynamicSegment(segment)) {
    return `:${segment.slice(1, -1)}`;
  }

  return segment;
}

function getChildNode(parentNode, rawSegment) {
  if (!parentNode.children.has(rawSegment)) {
    parentNode.children.set(
      rawSegment,
      createRouteNode(rawSegment, getPathSegment(rawSegment)),
    );
  }

  return parentNode.children.get(rawSegment);
}

function assignModule(node, propertyName, filePath, loadModule) {
  if (node[propertyName]) {
    throw new Error(`Duplicate route module for "${filePath}".`);
  }

  node[propertyName] = {
    filePath,
    loadModule,
  };
}

function createLazyRoute(moduleEntry) {
  return async () => {
    const module = await moduleEntry.loadModule();
    const routeModule = {
      handle: module.meta ?? {},
    };

    if (module.default) {
      routeModule.Component = module.default;
    }

    if (module.loader) {
      routeModule.loader = module.loader;
    }

    if (module.action) {
      routeModule.action = module.action;
    }

    if (module.ErrorBoundary) {
      routeModule.ErrorBoundary = module.ErrorBoundary;
    }

    if (module.shouldRevalidate) {
      routeModule.shouldRevalidate = module.shouldRevalidate;
    }

    return routeModule;
  };
}

function addModuleToTree(rootNode, filePath, loadModule) {
  const relativePath = filePath
    .replace('../pages/', '')
    .replace(/\.jsx$/, '');
  const segments = relativePath.split('/');

  if (segments.some(isIgnoredSegment)) {
    return;
  }

  const fileName = segments.at(-1);
  let currentNode = rootNode;

  for (const segment of segments.slice(0, -1)) {
    currentNode = getChildNode(currentNode, segment);
  }

  if (fileName === 'index') {
    assignModule(currentNode, 'indexModule', filePath, loadModule);
    return;
  }

  if (fileName === 'layout') {
    assignModule(currentNode, 'layoutModule', filePath, loadModule);
    return;
  }

  if (fileName === 'not-found') {
    assignModule(currentNode, 'notFoundModule', filePath, loadModule);
    return;
  }

  const pageNode = getChildNode(currentNode, fileName);
  assignModule(pageNode, 'pageModule', filePath, loadModule);
}

function getNodeRank(node) {
  if (node.pathSegment === null) {
    return 0;
  }

  if (node.pathSegment === '*') {
    return 3;
  }

  if (node.pathSegment.startsWith(':')) {
    return 2;
  }

  return 1;
}

function sortRouteNodes(routeNodes) {
  return [...routeNodes].sort((nodeA, nodeB) => {
    const rankDifference = getNodeRank(nodeA) - getNodeRank(nodeB);

    if (rankDifference !== 0) {
      return rankDifference;
    }

    return nodeA.rawSegment.localeCompare(nodeB.rawSegment);
  });
}

function buildNodeChildren(node) {
  const childRoutes = [];

  if (node.indexModule) {
    childRoutes.push({
      index: true,
      lazy: createLazyRoute(node.indexModule),
    });
  }

  for (const childNode of sortRouteNodes(node.children.values())) {
    const route = buildRouteNode(childNode);

    if (route) {
      childRoutes.push(route);
    }
  }

  if (node.notFoundModule) {
    childRoutes.push({
      path: '*',
      lazy: createLazyRoute(node.notFoundModule),
    });
  }

  return childRoutes;
}

function buildRouteNode(node) {
  const route = {};
  const childRoutes = buildNodeChildren(node);

  if (node.pathSegment !== null) {
    route.path = node.pathSegment;
  }

  if (node.pageModule) {
    route.lazy = createLazyRoute(node.pageModule);
  } else if (node.layoutModule) {
    route.lazy = createLazyRoute(node.layoutModule);
  }

  if (childRoutes.length > 0) {
    route.children = childRoutes;
  }

  if (!('path' in route) && !route.lazy && childRoutes.length === 0) {
    return null;
  }

  return route;
}

export function buildPageRoutes() {
  const rootNode = createRouteNode();

  for (const [filePath, loadModule] of Object.entries(pageModules)) {
    addModuleToTree(rootNode, filePath, loadModule);
  }

  const routeChildren = buildNodeChildren(rootNode);

  if (!rootNode.layoutModule) {
    return routeChildren;
  }

  return [
    {
      lazy: createLazyRoute(rootNode.layoutModule),
      children: routeChildren,
    },
  ];
}
