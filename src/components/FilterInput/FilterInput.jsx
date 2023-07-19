import { useEffect } from "react";
import { useFormStatesContext } from "./../../components/Search/FormContext";
import BodyTypeInput from "./BodyTypeInput/BodyTypeInput";
import MassInput from "./MassInput/MassInput";
import GravityInput from  "./GravityInput/GravityInput";
import DensityInput from "./DensityInput/DensityInput";
import style from "./filter-input-styles.module.scss";

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
    setDensity,
    setFirstSearch
  } = useFormStatesContext();

  useEffect(() => {
    setFirstSearch(true)
  }, [filterType]);

  return (
    <div className={style["container"]}>
      {filterType === "bodyType" && <BodyTypeInput bodyType={bodyType} setBodyType={setBodyType} />}
      {filterType === "mass" && <MassInput mass={mass} setMass={setMass} />}
      {filterType === "gravity" && <GravityInput gravity={gravity} setGravity={setGravity} />}
      {filterType === "density" && <DensityInput density={density} setDensity={setDensity} />}
    </div>
  );
};

export default FilterInput;