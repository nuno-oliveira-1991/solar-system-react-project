import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import { FormStatesContextProvider } from "./contexts/FormContext"
import NavBar from "./components/NavBar/NavBar"
import SystemModel from "./components/SystemModel/SystemModel"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import SearchResults from "./pages/SearchResults/SearchResults"
import BodyDetail from "./pages/BodyDetail/BodyDetail"

const App = () => {
  return (
    <FormStatesContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Outlet />}>
            <Route index element={<SearchResults />} />
            <Route path=":bodyPageName" element={<BodyDetail />} />
          </Route>
        </Routes>
        <SystemModel />
      </BrowserRouter>
    </FormStatesContextProvider>
  );
};

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)
root.render(<App />)