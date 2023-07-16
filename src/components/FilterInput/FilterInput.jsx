import { useState, useEffect } from "react"

import style from "./filter-input-styles.module.scss"

const FilterInput = ({ filterType, bodies }) => {
  const [filterFormInput, setFilterFormInput] = useState(null)
  const [filterForm, setFilterForm] = useState(null)
  

  function compareNumbers(a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
    return 0;
  }
  
  let sortedByMass = bodies.map((body) => {
    if (body?.mass?.massValue && body?.mass?.massExponent) {
      console.log(body.mass.massValue, body.mass.massExponent)
      return body.mass.massValue ** body.mass.massExponent;
    } else {
      // Handle the case where mass or mass.massValue is null or undefined
      return 0;
    }
  });
  sortedByMass.sort(compareNumbers)
  console.log(sortedByMass[0], sortedByMass[sortedByMass.length - 1])


  const BodyTypeForm = () => {
    const [filterValue, setFilterValue] = useState(null)
    return (
      <>
        <span className={style["filter-menu"]}>
          {!filterValue && <span>Choose body a type</span>}
          <span>{filterValue && filterValue}</span>
        </span>
        <ul className={style["filter-menu-content"]}>
          <li onClick={() => {setFilterValue("Star")}}>Star</li>
          <li onClick={() => {setFilterValue("Planet")}}>Planet</li>
          <li onClick={() => {setFilterValue("DwarfPlanet")}}>Dwarf Planet</li>
          <li onClick={() => {setFilterValue("Moon")}}>Moon</li>
          <li onClick={() => {setFilterValue("Comet")}}>Comet</li>
          <li onClick={() => {setFilterValue("Asteroid")}}>Asteroid</li>
        </ul>
      </>
    )
  }

  const MassForm = () => {  
    const [mass, setMass] = useState(null)
    const [massValue, setMassValue] = useState(null)
    const [massExponent, setMassExponent] = useState(null)

    useEffect(() => {
      setMass(massValue ** massExponent)
    }, [massValue, massExponent])

    return (
      <>
        <span className={style["filter-menu"]}>
          {mass === null && <span>Choose mass</span>}
          {mass && <span>{mass}</span>}
        </span>
        <ul className={style["filter-menu-content"]}>
          <li>
            <span>Value</span>
            <input type="number" className={style["input"]} value={massValue} onChange={(event) => {
              setMassValue(event.target.value)
            }} min="0" max="30" />
            <label>Exponent</label>
            <input type="number" className={style["input"]} value={massExponent} onChange={(event) => {
              setMassExponent(event.target.value)
            }} min="0" max="50" />
          </li>
        </ul>
      </>
    )
  }  

  // criar componente para os dropdown menus? 
  return (
    <div className={style["container"]}>
      {filterForm && filterForm}
      {filterType === "bodyType" && <BodyTypeForm />}
      {filterType === "mass" && <MassForm />}
    </div>
  )
}

export default FilterInput