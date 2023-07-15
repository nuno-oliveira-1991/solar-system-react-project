import React from 'react';
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    Link
  } from "react-router-dom";

import Home from "./pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Outlet />
        </>
      ),
      children: [
        {
          path: "/",
          element: <Home />
        }
      ]
    }
  ]);
  
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);
  
  root.render(
    <>
      <RouterProvider router={router} />
    </>
  );
