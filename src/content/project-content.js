export const projectGoal =
  'Generate the same generic React project in another repository without extra demo folders or sample feature modules.';

export const navigationLinks = [
  {
    label: 'Overview',
    to: '/',
  },
  {
    label: 'Docs',
    to: '/docs',
  },
  {
    label: 'Sample',
    to: '/sample',
  },
];

export const overviewStats = [
  {
    label: 'Routing mode',
    value: 'Nested + dynamic',
  },
  {
    label: 'Theme modes',
    value: 'Light / Dark / System',
  },
  {
    label: 'Manifest sync',
    value: 'project-structure.json',
  },
  {
    label: 'Sample route',
    value: '/sample',
  },
];

export const overviewCards = [
  {
    title: 'Routing',
    description:
      'Use folders, layouts, dynamic segments, and route groups inside src/pages without hand-writing route objects.',
  },
  {
    title: 'Dummy data',
    description:
      'Keep boilerplate copy, docs topics, and route examples together so the starter stays reproducible.',
  },
  {
    title: 'Responsive shell',
    description:
      'The header, cards, and docs layout are tuned for narrow screens first and expand cleanly on larger devices.',
  },
  {
    title: 'Theme styles',
    description:
      'Theme-specific surface styling is managed from one shared config instead of repeating mode checks in every page.',
  },
  {
    title: 'Shared services',
    description:
      'HTTP helpers remain isolated in src/services/http.js so route files stay focused on composition.',
  },
];

export const buildRules = [
  'Keep the folder tree shallow and only add new top-level folders when the project has a real need.',
  'Treat src/pages as the source of truth for routes and keep route copy driven by shared dummy content.',
  'Use Context only for truly shared state such as theme, auth, or session.',
  'Document structure changes in project-structure.json whenever the boilerplate grows.',
];

export const routingPatterns = [
  {
    file: 'src/pages/index.jsx',
    route: '/',
    status: 'Live',
    description: 'Root index file.',
  },
  {
    file: 'src/pages/docs/index.jsx',
    route: '/docs',
    status: 'Live',
    description: 'Nested folder index route.',
  },
  {
    file: 'src/pages/docs/[slug].jsx',
    route: '/docs/:slug',
    status: 'Live',
    description: 'Dynamic segment for one level of docs content.',
  },
  {
    file: 'src/pages/sample.jsx',
    route: '/sample',
    status: 'Live',
    description: 'Sample route showing theme-managed app styles.',
  },
  {
    file: 'src/pages/(marketing)/pricing.jsx',
    route: '/pricing',
    status: 'Supported',
    description: 'Route group folder is ignored in the URL.',
  },
  {
    file: 'src/pages/blog/[...all].jsx',
    route: '/blog/*',
    status: 'Supported',
    description: 'Catch-all route at the end of a folder tree.',
  },
];

export const docsTopics = [
  {
    slug: 'routing',
    title: 'Next-style file routing',
    summary:
      'Nested folders, dynamic segments, route groups, and catch-all files all map cleanly into React Router.',
    sections: [
      {
        title: 'Folder rules',
        body:
          'Every supported .jsx file inside src/pages becomes part of the route tree. index.jsx resolves to the folder root, and layout.jsx wraps everything beneath it.',
        bullets: [
          'src/pages/docs/index.jsx becomes /docs',
          'src/pages/docs/layout.jsx wraps both /docs and /docs/:slug',
          'Files or folders prefixed with _ are ignored by the route builder',
        ],
      },
      {
        title: 'Dynamic paths',
        body:
          'Use [slug].jsx for one segment and [...all].jsx for a trailing catch-all. That keeps route creation close to the file system, similar to Next.js.',
        bullets: [
          '[slug].jsx becomes :slug',
          '[...all].jsx becomes *',
          'Folders wrapped in parentheses are treated as route groups',
        ],
      },
    ],
  },
  {
    slug: 'mobile',
    title: 'Responsive defaults',
    summary:
      'The shell now starts from a phone-friendly layout and scales up with larger spacing, wider grids, and roomier typography.',
    sections: [
      {
        title: 'Shell behavior',
        body:
          'The header can wrap, navigation pills stay tappable, and the theme toggle stays usable even on narrow viewports.',
        bullets: [
          'Brand and controls split into stacked rows on small screens',
          'Cards and docs navigation collapse into single-column layouts first',
          'Large headings step up gradually instead of jumping straight to desktop sizes',
        ],
      },
      {
        title: 'Content flow',
        body:
          'Long code blocks and route examples use overflow-safe containers so the page stays readable instead of forcing horizontal scrolling.',
        bullets: [
          'Preformatted snippets use max-width and overflow-x-auto',
          'Primary actions wrap instead of clipping',
          'Section grids only become multi-column when the viewport has room',
        ],
      },
    ],
  },
  {
    slug: 'blueprint',
    title: 'Project blueprint data',
    summary:
      'The starter now keeps its goal, route examples, docs topics, and overview cards in one shared content file.',
    sections: [
      {
        title: 'Why centralize it',
        body:
          'Shared dummy data makes the boilerplate easier to clone into another repository because product copy, manifest details, and docs pages stay aligned.',
        bullets: [
          'The homepage and docs read from the same source file',
          'project-structure.json mirrors the same goal and structure changes',
          'New routes can add their own content without creating a sample feature module',
        ],
      },
      {
        title: 'What changed',
        body:
          'A small content folder now holds reusable starter copy instead of scattering project metadata across multiple pages.',
        bullets: [
          'Goal text matches the manifest',
          'Docs routes use shared topic data',
          'Navigation links come from the same dummy content source',
        ],
      },
    ],
  },
];

export const sampleRouteHighlights = [
  'Uses the active theme from React Context.',
  'Pulls panel and badge styles from src/theme/app-theme.js.',
  'Shows how to add a simple new page inside src/pages without manual router edits.',
];

export const projectStructureSnippet = `src/
  components/
    ErrorBoundary.jsx
    Footer.jsx
    Header.jsx
    Layout.jsx
    ThemeToggle.jsx
  content/
    project-content.js
  context/
    ThemeContext.jsx
  pages/
    docs/
      [slug].jsx
      index.jsx
      layout.jsx
    index.jsx
    not-found.jsx
    sample.jsx
  theme/
    app-theme.js
  router/
    index.jsx
    route-builder.jsx
  services/
    http.js
  App.jsx
  index.css
  main.jsx`;
