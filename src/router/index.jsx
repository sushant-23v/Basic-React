import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { buildPageRoutes } from '@/router/route-builder';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: buildPageRoutes(),
  },
]);
