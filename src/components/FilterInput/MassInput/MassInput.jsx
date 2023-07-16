import { useState, useEffect } from "react"

import style from "./../filter-input-styles.module.scss"

const MassInput = () => {  
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
        {mass && <span>at least {mass} kg</span>}
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

export default MassInput