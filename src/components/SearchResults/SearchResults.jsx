import { useEffect, useState } from "react";
import style from "./search-results-styles.module.scss";

const SearchResults = ({ isSearchSubmitted, bodies, filterType, bodyType, mass, gravity, density }) => {
  const [searchResults, setSearchResults] = useState("");

  useEffect(() => {
    if (isSearchSubmitted) {
      const updatedBodies = bodies.map((body) => {
        if (body.englishName === "Sun") {
          return { ...body, gravity: 274, density: 1.41 };
        }
        return body;
      });

      let bodiesThatMatched;

      if (filterType === "bodyType") {
        bodiesThatMatched = updatedBodies.filter((body) => body.bodyType === bodyType);
      } else if (filterType === "mass") {
        bodiesThatMatched = updatedBodies.filter((body) => {
          if (body.mass?.massValue && body.mass?.massExponent) {
            return body.mass.massValue * Math.pow(10, body.mass.massExponent) >= mass;
          }
          return false;
        });
      } else if (filterType === "gravity") {
        bodiesThatMatched = updatedBodies.filter((body) => {
          if (body.gravity) {
            return body.gravity >= gravity;
          }
          return false;
        });
      } else if (filterType === "density") {
        bodiesThatMatched = updatedBodies.filter((body) => {
          if (body.density) {
            return body.density >= density;
          }
          return false;
        });
      }
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