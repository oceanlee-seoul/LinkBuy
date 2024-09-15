import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Signin from './pages/signup-signin/signin.tsx';
import Signup from './pages/signup-signin/signup.tsx';
import Articles from './pages/articles/index.tsx';
import Products from './pages/products/index.tsx';
import Layout from './components/Layout/index.tsx';

const router = createBrowserRouter([
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/',
    element: <App />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/articles',
        element: <Articles />,
      },
      {
        path: '/products',
        element: <Products />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
