import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { FormStatesContextProvider } from "./../../components/Search/FormContext";

export default function Root() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}