import { useEffect} from "react"
import { useFormStatesContext } from "./FormContext";
import FilterInput from "./../../components/FilterInput/FilterInput"
import SearchResults from "../../components/SearchResults/SearchResults";

import style from "./search-styles.module.scss"

const Search = ({ bodies }) => {

  const {
    filterType,
    setFilterType,
    filterTitle,
    setFilterTitle,
    bodyType,
    setBodyType,
    mass,
    setMass,
    gravity,
    setGravity,
    density,
    setDensity,
    isSearchInitialized,
    setIsSearchInitialized,
    isSearchSubmitted, 
    setIsSearchSubmitted
  } = useFormStatesContext()

  const getSearchResults = (event) => {
    event.preventDefault()
    if (!isSearchInitialized) {
      setIsSearchInitialized(true)
      setIsSearchSubmitted(true);
    }
    setIsSearchSubmitted(true);
  }

  useEffect(() => {
    if (filterType)
    setFilterTitle(filterType.charAt(0).toUpperCase()+ filterType.slice(1))
  }, [filterType])

  useEffect(() => {
    if (isSearchSubmitted) {
      setIsSearchSubmitted(false)
    }
    
  }, [isSearchSubmitted]);
  
  
  return (
    <div className={style["container"]}>
      <form onSubmit={getSearchResults}>
      <div className={style["header"]}>
        <div className={style["filter-menu"]}>
          {filterTitle}
          <ul className={style["filter-menu-content"]}>
            <li onClick={() => {setFilterType("bodyType")}}>Body Type</li>
            <li onClick={() => {setFilterType("mass")}}>Mass</li>
            <li onClick={() => {setFilterType("gravity")}}>Gravity</li>
            <li onClick={() => {setFilterType("density")}}>Density</li>
          </ul>
        </div>
        <FilterInput 
          filterType={filterType} 
          bodyType={bodyType} 
          mass={mass} 
          gravity= {gravity}
          density={density}
        />
        <button className={style["submit-button"]} type="submit">Search</button>
      </div>
    </form>
    {isSearchInitialized && 
      <SearchResults 
      bodies={bodies}
      filterType={filterType} 
      bodyType={bodyType} 
      mass={mass} 
      gravity= {gravity}
      density={density}
      isSearchSubmitted={isSearchSubmitted}
      />
    }
    </div>
    
  )
}

export default Search