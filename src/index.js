import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './global.css';
import App from './App';
import Details from './details';
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/details",
    element: <Details/>
  }
 
]);
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);