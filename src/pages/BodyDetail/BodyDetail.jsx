import React, { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useFormStatesContext } from "./../../contexts/FormContext"
import style from "./body-detail-style.module.scss"

const BodyDetail = () => {
  const { detailMode, setDetailMode, setSearchMode, searchResults } = useFormStatesContext()
  const navigate = useNavigate()
  const { englishName } = useParams()

  useEffect(() => {
    setSearchMode(false)
    setDetailMode(true)
  }, [])
  
  const selectedBody = searchResults.find((body) => {
    return body.englishName === englishName;
  })

  const { 
    imageURL,
    bodyName,
    bodyType, 
    equaRadius,
    polarRadius,
    gravity,
    density,
    mass,
    vol,
    avgTemp,
    aroundPlanet,
    inclination,
    axialTilt,
    discoveryDate,
    discoveredBy,
    sideralOrbit,
    sideralRotation
   } = selectedBody

  return (
    <>
      {detailMode && (
        <div className={style["container"]}>
          <button
            onClick={() => {
              navigate("/search");
              setDetailMode(false);
              setSearchMode(true)
            }}
            className={style["go-back-button"]}>
              &#8630;
          </button>
          <div className={style["info"]}>
            <div className={style["image"]}>
              <img src={imageURL}></img>
            </div>
            <div className={style["description"]}>
              <h1>{englishName}</h1>
              <div>
                <div className={style["properties-column"]}>
                  <span>Body Type</span>
                  <span>Volume</span>
                  <span>Equatorial Radius</span>
                  <span>Polar Radius</span>
                  <span>Inclination</span>
                  <span>Axial Tilt</span>
                  <span>Gravity</span>
                  <span>Density</span>
                  <span>Mass</span>
                  <span>Average Temperature</span>
                  <span>Sidereal Orbit</span>
                  <span>Sidereal Rotation</span>
                  <span>Discovery Date</span>
                </div>
                <div className={style["values-column"]}>
                  <span>{bodyType}</span>
                  <span>{ vol !== null ? `${(vol.volValue * Math.pow(10, vol.volExponent)).toExponential(4)} km3` : "unknown" }</span>
                  <span>{equaRadius} km</span>
                  <span>{polarRadius} km</span>
                  <span>{inclination}°</span>
                  <span>{axialTilt}°</span>
                  <span>{gravity} m/s²</span>
                  <span>{density} g/cm³</span>
                  <span>{mass !== null ? (mass.massValue * Math.pow(10, mass.massExponent)).toExponential(4) : "unknown"}</span>
                  <span>{avgTemp}°</span>
                  <span>{sideralOrbit} days</span>
                  <span>{sideralRotation} hours</span>
                  <span>{discoveryDate ? discoveryDate : "unknown"}</span>
                </div>
              </div>
              <p><b>{"By "}</b>{discoveredBy ? discoveredBy : "unknown"}</p>
            </div>
          </div>
        </div>  
      )}
    </>
  );
};

export default BodyDetail
