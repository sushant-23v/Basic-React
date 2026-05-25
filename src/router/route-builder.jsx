const pageModules = import.meta.glob('../pages/**/*.jsx');

function getRouteDefinition(filePath) {
  const routePath = filePath
    .replace('../pages/', '')
    .replace(/\.jsx$/, '');

  if (routePath === 'index') {
    return { index: true };
  }

  if (routePath === 'not-found') {
    return { path: '*' };
  }

  return {
    path: routePath.replace(/\/index$/, ''),
  };
}

export function buildPageRoutes() {
  return Object.entries(pageModules)
    .map(([filePath, loadModule]) => ({
      ...getRouteDefinition(filePath),
      lazy: async () => {
        const module = await loadModule();

        return {
          Component: module.default,
          handle: module.meta ?? {},
        };
      },
    }))
    .sort((routeA, routeB) => {
      if (routeA.path === '*') {
        return 1;
      }

      if (routeB.path === '*') {
        return -1;
      }

      if (routeA.index) {
        return -1;
      }

      if (routeB.index) {
        return 1;
      }

      return routeA.path.localeCompare(routeB.path);
    });
}
