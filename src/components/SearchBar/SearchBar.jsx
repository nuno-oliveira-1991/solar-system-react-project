import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useFormStatesContext } from "../../contexts/FormContext"
import FilterInput from "../FilterInput/FilterInput"
import style from "./search-styles.module.scss"

const SearchBar = () => {

  const {
    filterType,
    setFilterType,
    filterTitle,
    setFilterTitle,
    setBodyType,
    setMassExponent,
    setMassValue,
    setMass,
    setGravity,
    setDensity,
    isSearchInitialized,
    setIsSearchInitialized,
    isSearchSubmitted,
    setIsSearchSubmitted,
    detailMode,
    setDetailMode,
    isSubMenuOpen,
    setIsSubMenuOpen
  } = useFormStatesContext();

  const getSearchResults = (event) => {
    event.preventDefault()
    setDetailMode(false)
    if (!isSearchInitialized) {
      setIsSearchInitialized(true)
      setIsSearchSubmitted(true)
    } else {
      setIsSearchSubmitted(true)
    }
  };

  // 
  const handleFilterMenuClick = () => {
    if (!isSubMenuOpen) setIsSubMenuOpen(true)
  };
  const handleListItemClick = () => {
    if (isSubMenuOpen) setIsSubMenuOpen(false)
  };

  useEffect(() => {
    if (filterType) setFilterTitle(filterType.charAt(0).toUpperCase() + filterType.slice(1))
    setBodyType(undefined)
    setMassExponent(undefined)
    setMassValue(undefined)
    setMass(undefined)
    setGravity(undefined)
    setDensity(undefined)
  }, [filterType]);

  useEffect(() => {
    if (isSearchSubmitted) {
      setIsSearchSubmitted(false)
      if (detailMode) setDetailMode(false)
    }
  }, [isSearchSubmitted])

  return (
      <div className={style["container"]}>
        <form onSubmit={getSearchResults}>
          <div className={style["header"]}>
            <button className={`${style["filter-menu"]} ${"btn btn--blue"}`} onClick={handleFilterMenuClick}>
              {filterTitle}
              {isSubMenuOpen && <ul className={style["filter-menu-content"]}>
                <li onClick={() => {setFilterType("bodyType"); handleListItemClick()}}>Body Type</li>
                <li onClick={() => {setFilterType("mass"); handleListItemClick()}}>Mass</li>
                <li onClick={() => {setFilterType("gravity"); handleListItemClick()}}>Gravity</li>
                <li onClick={() => {setFilterType("density"); handleListItemClick()}}>Density</li>
              </ul>}
            </button>
            {filterType && <FilterInput />}
            { !detailMode && <button className="btn btn--green" type="submit">Submit</button>}
            { detailMode && 
              <Link 
                style={{ textDecoration: 'none', height: '100%' }} 
                to={"/search"}>
                  <button className="btn btn--green" type="submit">Submit</button>
              </Link>}
          </div>
        </form>
      </div>
  );
};

export default SearchBar;
