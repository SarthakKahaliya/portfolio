import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { Welcome } from './components/Welcome/Welcome';
import { Home } from './pages/Home.page';

const router = createBrowserRouter([
  {
    path: '/portfolio',
    element: <Home />,
    children: [
      { index: true, element: <Welcome /> },
      {
        path: 'about',
        element: <Welcome />,
      },
      {
        path: 'about',
        element: <Welcome />,
      },
      {
        path: 'projects',
        element: <Welcome />,
      },
      {
        path: 'resume',
        element: <Welcome />,
      },
      {
        path: 'contact',
        element: <Welcome />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/portfolio" />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
