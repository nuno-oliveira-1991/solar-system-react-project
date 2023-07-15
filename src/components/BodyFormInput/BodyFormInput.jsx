import { useState, useEffect } from "react"

import style from "./bodyforminput-styles.module.scss"

const BodyFormInput = ({ filterType, bodies }) => {
  const [filterFormInput, setFilterFormInput] = useState(null)
  const [filterForm, setFilterForm] = useState(null)


/*
    const BodyTypeForm = () => {
      return (
        <ul className={style["bodyType-menu-content"]}>
          <li onClick={() => {setFilterType("star")}}>Star</li>
          <li onClick={() => {setFilterType("planet")}}>Planet</li>
          <li onClick={() => {setFilterType("dwarfPlanet")}}>Dwarf Planet</li>
          <li onClick={() => {setFilterType("moon")}}>Moon</li>
          <li onClick={() => {setFilterType("comet")}}>Comet</li>
          <li onClick={() => {setFilterType("asteroid")}}>Asteroid</li>
        </ul>
      )
    }

    const MassForm = () => {
      
      return (
        <></>
      )
    }
*/
  // criar componente para os dropdown menus? 
  return (
    <div className={style["container"]}>
      {filterForm && filterForm}
    </div>
  )
}

export default BodyFormInput