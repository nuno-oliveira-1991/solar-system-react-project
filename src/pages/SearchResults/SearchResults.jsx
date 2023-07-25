import { useEffect } from "react";
import { useFormStatesContext } from "./../../contexts/FormContext";
import SearchItem from "./SearchItem/SearchItem";
import style from "./search-results-styles.module.scss";
import ceresImage from "./../../assets/images/ceres.png"
import ganymedesMoonImage from "./../../assets/images/ganymede.png";
import asteroidImage from "./../../assets/images/asteroid.png";

const SearchResults = () => {
  const { 
    allBodies,
    setAllBodies,
    isSearchSubmitted,  
    filterType, 
    bodyType, 
    mass, 
    gravity, 
    density,
    searchResults, 
    firstSearch,
    searchMode,
    setSearchMode,
    setSearchResults,
    setIsSearchSubmitted,
    setIsLoading,
  } = useFormStatesContext()


  useEffect(() => {
    setSearchMode(true)
    fetch("https://api.le-systeme-solaire.net/rest/bodies/")
      .then((response) => response.json())
      .then((data) => {
        const bodies = data.bodies
        setAllBodies(bodies)
        setIsLoading(false)
      });
  }, [])

  useEffect(() => {
    if (allBodies) {
      allBodies.map(async (body) => {
        let name = body.id;
        name.toLowerCase();
        
        if (body.bodyType === "Moon" && body.englishName !== "Moon")
          body.imageURL = ganymedesMoonImage;
        else if (body.bodyType === "Asteroid") body.imageURL = asteroidImage;
        else {
          const dynamicImage = await import(`./../../assets/images/${name}.png`);
          body.imageURL = dynamicImage.default;
        }
        return body;
      });
    }
  }, [allBodies]);
  
  useEffect(() => {
    if (allBodies) {
      let bodies = allBodies
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
    }
  }, [ allBodies, isSearchSubmitted, mass, density, bodyType, gravity, filterType]);

  return (
    <div className={style["container"]}>
      {searchResults && !firstSearch &&
        <div className={style["header"]}>
          <span>Name</span>
          <span>Type</span>
          <span className={style["attributeTitle"]}>volume</span>
          <span className={style["attributeTitle"]}>Sideral Orbit</span>
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