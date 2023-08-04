import { Link } from "react-router-dom"
import { useFormStatesContext } from "./../../contexts/FormContext"
import style from "./navbar-style.module.scss"
import SearchBar from "../SearchBar/SearchBar"

const NavBar = () => {
  const {
    searchMode, 
    setSearchMode,
    aboutMode, 
    setAboutMode,
    detailMode,
    setDetailMode,
    IsSearchInitialized,
    setIsSearchInitialized,
    setSearchResults,
    setFilterType,
    setFilterTitle,
    setBodyType,
    setMassExponent,
    setMassValue,
    setMass,
    setGravity,
    setDensity,
  } = useFormStatesContext()
  
  const goToSearch = () => {
    if (!IsSearchInitialized) setIsSearchInitialized(true)
    if (aboutMode) setAboutMode(false)
    if (detailMode) setDetailMode(false)
    setSearchMode(true)
    setSearchResults(undefined)
    setFilterType(undefined)
    setFilterTitle("Filters")
    setBodyType("")
    setMassExponent("")
    setMassValue("")
    setMass("")
    setGravity("")
    setDensity("")
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
          <button className="btn" onClick={goToSearch}>Search</button>
        </Link>}
      {searchMode && 
        <Link style={{ textDecoration: 'none', height: '100%' }} to={`/`}>
          <button className="btn" onClick={goToHome}>Home</button>
        </Link>}
      {searchMode && <SearchBar onClick={goToSearch} />}
      {!aboutMode && 
        <Link style={{ textDecoration: 'none', height: '100%' }} to={`/about`}>
          <button className="btn"onClick={goToAbout}>About</button>
        </Link>}
      {aboutMode && 
        <Link style={{ textDecoration: 'none', height: '100%' }} to={`/`}>
          <button className="btn" onClick={goToHome}>Home</button>
        </Link>}
    </div>
  )
}

export default NavBar