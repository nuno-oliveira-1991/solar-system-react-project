import { useState, useEffect } from "react"
import { useFormStatesContext } from "../../Search/FormContext";

import style from "./../filter-input-styles.module.scss"

const MassInput = () => {  
  const [massValue, setMassValue] = useState("")
  const [massExponent, setMassExponent] = useState("")
  const { mass, setMass } = useFormStatesContext()

  useEffect(() => {
    const value = parseFloat(massValue);
    const exponent = parseFloat(massExponent);

    if (!isNaN(value) && !isNaN(exponent)) {
      setMass(value * Math.pow(10, exponent))
    }
  }, [massValue, massExponent]);

  return (
    <>
      <span className={style["filter-menu"]}>
        {mass === undefined && <span>Choose mass</span>}
        {mass >= 0 && <span>at least {mass} kg</span>}
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
          }} min="0" max="28" />
        </li>
      </ul>
    </>
  )
} 

export default MassInput