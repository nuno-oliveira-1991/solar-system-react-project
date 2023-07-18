import { useFormStatesContext } from "./../../components/Search/FormContext";
import BodyTypeInput from "./BodyTypeInput/BodyTypeInput";
import MassInput from "./MassInput/MassInput"
import GravityInput from  "./GravityInput/GravityInput"
import DensityInput from "./DensityInput/DensityInput"
import style from "./filter-input-styles.module.scss"

const FilterInput = () => {
  const { 
    filterType, 
    bodyType, 
    setBodyType, 
    mass, 
    setMass, 
    gravity, 
    setGravity, 
    density, 
    setDensity
  } = useFormStatesContext();

  console.log(filterType)

  return (
    <div className={style["container"]}>
      {filterType === "bodyType" && <BodyTypeInput />}
      {filterType === "mass" && <MassInput />}
      {filterType === "gravity" && <GravityInput />}
      {filterType === "density" && <DensityInput />}
    </div>
  )
}

export default FilterInput