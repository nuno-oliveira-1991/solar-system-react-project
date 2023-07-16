import { useFormStatesContext } from "./../../../pages/Search/FormContext";

import style from "./../filter-input-styles.module.scss"

const GravityInput = ({ gravity, setGravity }) => {  

  return (
    <>
      <span className={style["filter-menu"]}>
        {gravity === "" && <span>Choose Gravity</span>}
        {gravity && <span>at least {gravity} m/s²</span>}
      </span>
      <ul className={style["filter-menu-content"]}>
        <li>
          <span>Value</span>
          <input type="number" className={style["input"]} value={gravity} onChange={(event) => {
            setGravity(event.target.value)
          }} min="0" max="280" step="0.1"/>
        </li>
      </ul>
    </>
  )
} 

export default GravityInput