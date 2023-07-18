import { Link } from "react-router-dom";
import { useFormStatesContext } from "./../Search/FormContext";

import style from "./navbar-style.module.scss"

import Search from "../Search/Search";

const NavBar = () => {
  const {
    searchMode, 
    setSearchMode,
    aboutMode, 
    setAboutMode,
    setIsSearchInitialized,
    isFormSubmitted, 
    setIsFormSubmitted
  } = useFormStatesContext()
  
  const goToSearch = () => {
    setIsSearchInitialized(true)
    if (aboutMode) setAboutMode(false)
    setSearchMode(true)
  }
  const goToAbout = () => {
    setAboutMode(true)
    setSearchMode(false)
    setIsSearchInitialized(false)
  }
  const goToHome = () => {
    setSearchMode(false)
    setAboutMode(false)
    setIsSearchInitialized(false)
  }

  return (
    <div className={style["container"]}>
      {!searchMode && 
        <Link style={{ textDecoration: 'none', height: '100%' }} to={`/search`}>
          <span className="btn" onClick={goToSearch}>Search</span>
        </Link>}

      {searchMode && 
        <Link style={{ textDecoration: 'none', height: '100%' }} to={`/`}>
          <span className="btn" onClick={goToHome}>Home</span>
        </Link>}
        
      {searchMode && <Search onClick={goToSearch} />}

      {!aboutMode && 
        <Link style={{ textDecoration: 'none', height: '100%' }} to={`/about`}>
          <span className="btn"onClick={goToAbout}>About</span>
        </Link>}

      {aboutMode && 
      <Link style={{ textDecoration: 'none', height: '100%' }} to={`/`}>
        <span className="btn" onClick={goToHome}>Home</span>
      </Link>}
    </div>
  )
}

export default NavBar