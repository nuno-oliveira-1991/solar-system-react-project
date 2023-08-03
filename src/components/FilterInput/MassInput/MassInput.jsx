import { useEffect } from "react"
import { useFormStatesContext } from "../../../contexts/FormContext"
import style from "./../filter-input-styles.module.scss"

const MassInput = () => { 
  const {
    massExponent,
    setMassExponent,
    massValue,
    setMassValue,
    mass, 
    setMass,
    validationError, 
    setValidationError,
    errorMessage, 
    setErrorMessage
  } = useFormStatesContext()

  useEffect(() => {
    setValidationError(false)
  }, [])

  useEffect(() => {
    const value = parseFloat(massValue)
    const exponent = parseFloat(massExponent)

    if (!isNaN(value) && !isNaN(exponent)) {
      setMass(value * Math.pow(10, exponent))
    }
  }, [massValue, massExponent]);

  const handleInputValidation = (event, maxValue, string) => {
    if (event.target.value > maxValue) {
      setValidationError(true)
      setErrorMessage(`${string} must be equal or lesser than ${maxValue}.`)
    } else {
      setValidationError(false); 
      event.target.name === "massValue" ? setMassValue(event.target.value) : setMassExponent(event.target.value)
    }
  }

  return (
    <>
      <span className={style["filter-menu"]}>
        {mass === undefined && <span>Choose mass</span>}
        {mass >= 0 && <span>at least {mass} kg</span>}
      </span>
      <ul className={style["filter-menu-content"]}>
        <li>

          <label>Value</label>
          <input type="number" className={style["input"]} value={massValue} name="massValue" onChange={(event) => {
            handleInputValidation(event, 30, "Mass value")
          }} min="0" max="30" required/>

          <label>Exponent</label>
          <input type="number" className={style["input"]} value={massExponent} name="massExponent" onChange={(event) => {
            handleInputValidation(event, 28, "Exponent value")
          }} min="0" max="28" required/>

        </li>

        {validationError && <span className={style["error-message"]}>{errorMessage}</span>}

      </ul>
    </>
  )
} 

export default MassInput