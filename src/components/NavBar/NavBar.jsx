import { Link } from "react-router-dom";
import { useState } from "react"

import style from "./navbar-style.module.scss"

import Search from "../Search/Search";

const NavBar = () => {
  const [searchMode, setSearchMode] = useState(false)
  
  const goToSearch = () => {
    setSearchMode(true)
  }



  return (
    <div className={style["container"]}>
      <span className="btn" onClick={goToSearch}>Search</span>
      {searchMode && <Search />}
      <Link style={{ textDecoration: 'none', height: '100%' }} to={`/about`}><span className="btn">About</span></Link>
    </div>
  )
}

export default NavBar