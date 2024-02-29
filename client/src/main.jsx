import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Apply from './routes/Apply';
import Tracker from './routes/Tracker';
import Profile from './routes/Profile';
import Help from './routes/Help';
import About from './routes/About';
import Contact from './components/Contact';
import Network from './routes/Network.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/apply',
        element: <Apply />,
      },
      {
        path: '/track',
        element: <Tracker />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/help',
        element: <Help />,
      },
      {
        path: '/network',
        element: <Network />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);