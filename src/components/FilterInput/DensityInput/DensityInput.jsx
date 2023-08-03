import { useEffect } from "react"
import { useFormStatesContext } from "../../../contexts/FormContext"
import style from "./../filter-input-styles.module.scss"

const DensityInput = () => {  
  const { 
    density,
    setDensity,
    validationError,
    setValidationError, 
    errorMessage,
    setErrorMessage
  } = useFormStatesContext()

  useEffect(() => {
    setValidationError(false)
  }, [])

  const handleInputValidation = (event, maxValue, string) => {
    if (event.target.value > maxValue || typeof event.target.value !== "number") {
      setValidationError(true)
      setErrorMessage(`${string} must be a number and equal or lesser than ${maxValue}.`)
    } else {
      setValidationError(false); 
      setDensity(event.target.value)
    }
  }

  return (
    <>
      <span className={style["filter-menu"]}>
        {!density && <span>Choose Density</span>}
        {density && <span>at least {density} g/cm³</span>}
      </span>
      <ul className={style["filter-menu-content"]}>
        <li>
          <span>Value</span>
          <input type="number" className={style["input"]} value={density} name="density" onChange={(event) => {
            handleInputValidation(event, 10, "Density value")
          }} min="0" max="10" step="0.1"/>
        </li>
        {validationError && <span className={style["error-message"]}>{errorMessage}</span>}
      </ul>
    </>
  )
} 

export default DensityInput