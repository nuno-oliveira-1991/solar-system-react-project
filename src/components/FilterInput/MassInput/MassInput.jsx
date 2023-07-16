import { useState, useEffect } from "react"
import { useFormStatesContext } from "./../../../pages/Search/FormContext";

import style from "./../filter-input-styles.module.scss"

const MassInput = ({ mass, setMass }) => {  
  const [massValue, setMassValue] = useState(null)
  const [massExponent, setMassExponent] = useState(null)

  useEffect(() => {
    // Parse the values as numbers before calculating the mass
    const value = parseFloat(massValue);
    const exponent = parseFloat(massExponent);
  
    if (!isNaN(value) && !isNaN(exponent)) {
      // Perform the exponentiation only if the values are valid numbers
      setMass(value ** exponent);
    }
  }, [massValue, massExponent]);

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