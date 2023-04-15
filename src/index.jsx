import React from 'react';
import ReactDOM from 'react-dom/client';
import {createHashRouter, RouterProvider, HashRouter} from 'react-router-dom';

import { JulietArtsApp } from './JulietArtsApp';
import './styles.css';

const router = createHashRouter([
    {
        path: "/*",
        element: <JulietArtsApp />,
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
