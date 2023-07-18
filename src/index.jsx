import React from 'react';
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    Link
  } from "react-router-dom";
import { FormStatesContextProvider } from "./components/Search/FormContext";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About"
import SearchResults from './components/SearchResults/SearchResults';

const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/search",
          element: <SearchResults />
        }
      ]
    }
  ]);
  
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);
  
  root.render(
    <FormStatesContextProvider>
      <RouterProvider router={router} />
    </FormStatesContextProvider>
  );
