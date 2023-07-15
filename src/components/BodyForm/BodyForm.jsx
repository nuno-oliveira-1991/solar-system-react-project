import { useState } from "react"

import BodyFormInput from "./../BodyFormInput/BodyFormInput"

import style from "./bodyform-styles.module.scss"

const BodyForm = ({ bodies }) => {
  const [filterType, setFilterType] = useState(null)

  const getSearchResults = (event) => {
    event.target.preventDefault()
  }
  
  // criar componente para os dropdown menus?
  return (
    <form className={style["container"]}>
      <div className={style["header"]}>
        <span className={style["filter-menu"]}>
          Filters
          <ul className={style["filter-menu-content"]}>
            <li onClick={() => {setFilterType("bodyType")}}>Body Type</li>
            <li onClick={() => {setFilterType("mass")}}>Mass</li>
            <li onClick={() => {setFilterType("gravity")}}>Gravity</li>
            <li onClick={() => {setFilterType("density")}}>Density</li>
          </ul>
        </span>
        <BodyFormInput filterType={filterType} bodies={bodies}/>
        <button className={style["submit-button"]} type="submit">Search</button>
      </div>
    </form>
  )
}

export default BodyForm