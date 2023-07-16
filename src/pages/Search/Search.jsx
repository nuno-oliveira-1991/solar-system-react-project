import { useState } from "react"

import FilterInput from "./../../components/FilterInput/FilterInput"

import style from "./search-styles.module.scss"

const Search = ({ bodies }) => {
  const [filterType, setFilterType] = useState(null)

  const getSearchResults = (event) => {
    event.target.preventDefault()
  }
  
  // criar componente para os dropdown menus?
  return (
    <form className={style["container"]} onSubmit={getSearchResults}>
      <div className={style["header"]}>
        <div className={style["filter-menu"]}>
          Filters
          <ul className={style["filter-menu-content"]}>
            <li onClick={() => {setFilterType("bodyType")}}>Body Type</li>
            <li onClick={() => {setFilterType("mass")}}>Mass</li>
            <li onClick={() => {setFilterType("gravity")}}>Gravity</li>
            <li onClick={() => {setFilterType("density")}}>Density</li>
          </ul>
        </div>
        <FilterInput filterType={filterType} bodies={bodies}/>
        <button className={style["submit-button"]} type="submit">Search</button>
      </div>
    </form>
  )
}

export default Search