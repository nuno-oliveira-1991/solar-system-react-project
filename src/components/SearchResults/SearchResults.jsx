import { useEffect } from "react";
import { useFormStatesContext } from "./../Search/FormContext";
import SearchItem from "./SearchItem/SearchItem";
import style from "./search-results-styles.module.scss";
import ceresImage from "./../../assets/images/ceres.png"

const SearchResults = () => {
  const { 
    allBodies,
    isSearchSubmitted,  
    filterType, 
    bodyType, 
    mass, 
    gravity, 
    density,
    searchResults, 
    firstSearch,
    searchMode,
    setSearchResults,
    setIsSearchSubmitted,
  } = useFormStatesContext()
  
  let bodies = allBodies
  useEffect(() => {
    const sunIndex = bodies.findIndex((body) => body.englishName === "Sun");
    const ceresIndex = bodies.findIndex((body) => body.id === "ceres");
    if (sunIndex !== -1) {
      bodies[sunIndex].gravity = 274;
      bodies[sunIndex].density = 1.41;
    }
    if (sunIndex !== -1) {
      bodies[ceresIndex].englishName = "Ceres";
      bodies[ceresIndex].bodyType = "Dwarf Planet";
      bodies[ceresIndex].imageURL = ceresImage;
    }

    if (isSearchSubmitted) {
      let bodiesThatMatched;

      if (filterType === "bodyType") {bodiesThatMatched = bodies.filter((body) => body.bodyType === bodyType)} 
      else if (filterType === "mass") {bodiesThatMatched = bodies.filter((body) => {
          if (body.mass?.massValue && body.mass?.massExponent) {
            return body.mass.massValue * Math.pow(10, body.mass.massExponent) >= mass;
          } return false;
        });
      } 
      else if (filterType === "gravity") {bodiesThatMatched = bodies.map((body) => {
          if (body.englishName === "sun") {
            return { ...body, gravity: 274 };
          } return body;
        });
        bodiesThatMatched = bodiesThatMatched.filter((body) => body.gravity >= gravity);
      } 
      else if (filterType === "density") {bodiesThatMatched = bodies.map((body) => {
          if (body.englishName === "sun") {
            return { ...body, density: 1.41 };
          } return body;
        });
        bodiesThatMatched = bodiesThatMatched.filter((body) => body.density >= density);
      }
      setIsSearchSubmitted(false)
      setSearchResults(bodiesThatMatched);
    }
  }, [isSearchSubmitted, mass, density, bodyType, gravity, bodies, filterType]);

  return (
    <div className={style["container"]}>
      {searchResults && !firstSearch &&
        <div className={style["header"]}>
          <span>Name</span>
          <span>Type</span>
          <span>volume</span>
          <span>Sideral Orbit</span>
        </div>}
      {searchMode && searchResults &&  
        searchResults.map((body) => ( 
          <SearchItem 
            key={body.id}
            bodyId={body.id}
            bodyName={body.englishName}
            bodyType={body.bodyType} 
            equaRadius={body.equaRadius}
            polarRadius={body.polarRadius}
            gravity={body.gravity}
            density={body.density}
            mass={body.mass}
            vol={body.vol}
            avgTemp={body.avgTemp}
            inclination={body.inclination}
            axialTilt={body.axialTilt}
            discoveryDate={body.discoveryDate}
            discoveredBy={body.discoveredBy}
            sideralOrbit={body.sideralOrbit}
            sideralRotation={body.sideralRotation}
          />
        ))}
    </div>
  );
};

export default SearchResults;