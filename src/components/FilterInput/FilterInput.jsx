import { useState, useEffect } from "react"

import BodyTypeInput from "./BodyTypeInput/BodyTypeForm";
import MassInput from "./MassInput/MassInput";
import GravityInput from "./GravityInput/GravityInput";
import DensityInput from "./DensityInput/DensityInput";

import style from "./filter-input-styles.module.scss"

const FilterInput = ({ filterType, bodies }) => {

  function compareNumbers(a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
    return null;
  }

  /*
  let sortedByMass = bodies.map((body) => {
    return {density:body.density, name:body.englishName}
  });
  */
  

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