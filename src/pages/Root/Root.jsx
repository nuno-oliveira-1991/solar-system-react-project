import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import SystemModel from "./../../components/SystemModel/SystemModel"

export default function Root() {
  return (
    <>
      <NavBar />
      <Outlet />
      <SystemModel />
    </>
  );
}