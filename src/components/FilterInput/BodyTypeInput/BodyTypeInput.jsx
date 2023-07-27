import { useFormStatesContext } from "../../../contexts/FormContext"
import style from "./../filter-input-styles.module.scss"

const BodyTypeInput = () => {
  const { bodyType, setBodyType} = useFormStatesContext()
  return (
    <>
      <span className={style["filter-menu"]}>
        {!bodyType && <span>Choose a body type</span>}
        {bodyType && <span>{bodyType}</span>}
      </span>
      <ul className={style["filter-menu-content"]}>
        <li onClick={() => {setBodyType("Star")}}>Star</li>
        <li onClick={() => {setBodyType("Planet")}}>Planet</li>
        <li onClick={() => {setBodyType("Dwarf Planet")}}>Dwarf Planet</li>
        <li onClick={() => {setBodyType("Moon")}}>Moon</li>
        <li onClick={() => {setBodyType("Comet")}}>Comet</li>
        <li onClick={() => {setBodyType("Asteroid")}}>Asteroid</li>
      </ul>
    </>
  )
}

export default BodyTypeInput