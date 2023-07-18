import React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
  } from "react-router-dom";
import { FormStatesContextProvider } from "./components/Search/FormContext";
import NavBar from "./components/NavBar/NavBar";
import SystemModel from "./components/SystemModel/SystemModel"
import Home from "./pages/Home/Home";
import About from "./pages/About/About"
import SearchResults from "./components/SearchResults/SearchResults";
import BodyDetail from "./pages/BodyDetail/BodyDetail"

const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Outlet />
          <SystemModel />
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
          element: <Outlet />,
          children: [
            {
              path: "/search",
              element: <SearchResults />
            },
            {
              path: "/search/:englishName",
              element: <BodyDetail />
            }
          ]
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
