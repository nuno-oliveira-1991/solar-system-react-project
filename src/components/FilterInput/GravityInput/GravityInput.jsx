import { useEffect } from "react"
import { useFormStatesContext } from "../../../contexts/FormContext"
import style from "./../filter-input-styles.module.scss"

const GravityInput = () => {  
  const { 
    gravity,
    setGravity, 
    validationError,
    setValidationError, 
    errorMessage,
    setErrorMessage 
   } = useFormStatesContext()

   useEffect(() => {
    setValidationError(false)
  }, [])

  const handleInputValidation = (event, maxValue, string) => {
    if (event.target.value > maxValue) {
      setValidationError(true)
      setErrorMessage(`${string} must be a number equal or lesser than ${maxValue}.`)
    } else {
      setValidationError(false); 
      setGravity(event.target.value)
    }
  }
  return (
    <>
      <span className={style["filter-menu"]}>
        {!gravity && <span>Choose Gravity</span>}
        {gravity && <span>at least {gravity} m/s²</span>}
      </span>
      <ul className={style["filter-menu-content"]}>
        <li>
          <span>Value</span>
          <input type="number" className={style["input"]} value={gravity} name="gravity" onChange={(event) => {
            handleInputValidation(event, 280, "Gravity value")
          }} min="0" max="280" step="0.05"/>
        </li>
        {validationError && <span className={style["error-message"]}>{errorMessage}</span>}
      </ul>
    </>
  )
} 

export default GravityInput