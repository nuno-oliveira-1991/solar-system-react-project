import { useEffect } from "react";
import { useFormStatesContext } from "./../Search/FormContext";
import style from "./search-results-styles.module.scss";

const SearchResults = () => {

  const { 
    allBodies,
    isSearchSubmitted,  
    isSearchInitialized,
    filterType, 
    bodyType, 
    mass, 
    gravity, 
    density,
    searchResults,
    setSearchResults,
    setIsSearchSubmitted,
    setIsSearchInitialized,
  } = useFormStatesContext()
  
  let bodies = allBodies

  useEffect(() => {
    const sunIndex = bodies.findIndex((body) => body.englishName === "Sun");
    if (sunIndex !== -1) {
      bodies[sunIndex].gravity = 274;
      bodies[sunIndex].density = 1.41;
    }

    if (isSearchSubmitted) {
      let bodiesThatMatched;

      if (filterType === "bodyType") {
        bodiesThatMatched = bodies.filter((body) => body.bodyType === bodyType);
      } else if (filterType === "mass") {
        bodiesThatMatched = bodies.filter((body) => {
          if (body.mass?.massValue && body.mass?.massExponent) {
            return body.mass.massValue * Math.pow(10, body.mass.massExponent) >= mass;
          }
          return false;
        });
      } else if (filterType === "gravity") {
        bodiesThatMatched = bodies.map((body) => {
          if (body.englishName === "sun") {
            return { ...body, gravity: 274 };
          }
          return body;
        });
      } else if (filterType === "density") {
        bodiesThatMatched = bodies.map((body) => {
          if (body.englishName === "sun") {
            return { ...body, density: 1.41 };
          }
          return body;
        });
      }
      setIsSearchInitialized(false)
      setIsSearchSubmitted(false)
      setSearchResults(bodiesThatMatched);
    }
  }, [isSearchSubmitted, mass, density, bodyType, gravity, bodies, filterType]);

  return (
    <div className={style["container"]}>
      {searchResults &&
        searchResults.map((body) => (
          <div key={body.id} className={style["result-item"]}>
            <span className={style["identification"]}>{body.englishName}</span>
            <span className={style["identification"]}>{body.bodyType}</span>
          </div>
        ))}
    </div>
  );
};

export default SearchResults;