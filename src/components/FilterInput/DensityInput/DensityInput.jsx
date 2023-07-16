import { useFormStatesContext } from "./../../../pages/Search/FormContext";

import style from "./../filter-input-styles.module.scss"

const DensityInput = ({ density, setDensity }) => {  
  

  return (
    <>
      <span className={style["filter-menu"]}>
        {density === "" && <span>Choose Density</span>}
        {density && <span>at least {density} g/cm³</span>}
      </span>
      <ul className={style["filter-menu-content"]}>
        <li>
          <span>Value</span>
          <input type="number" className={style["input"]} value={density} onChange={(event) => {
            setDensity(event.target.value)
          }} min="0" max="10" step="0.1"/>
        </li>
      </ul>
    </>
  )
} 

export default DensityInput