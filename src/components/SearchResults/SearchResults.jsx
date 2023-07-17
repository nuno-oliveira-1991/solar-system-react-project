import { useEffect, useState } from "react";
import style from "./search-results-styles.module.scss";

const SearchResults = ({ isSearchSubmitted, bodies, filterType, bodyType, mass, gravity, density }) => {
  const [searchResults, setSearchResults] = useState("")
  const [resultProp, setResultProp] = useState("")

  console.log(bodies)
  useEffect(() => {
    if (isSearchSubmitted) {
      let bodiesThatMatched;

      if (filterType === "bodyType") {
        bodiesThatMatched = bodies.filter((body) => body.bodyType === bodyType);
      } else if (filterType === "mass") {
        bodiesThatMatched = bodies.filter((body) => {
          if (body.mass?.massValue && body.mass?.massExponent) {
            return body.mass.massValue ** body.mass.massExponent >= mass;
          } return false;
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
      console.log(bodiesThatMatched)
      setSearchResults(bodiesThatMatched);
    }
  }, [isSearchSubmitted]);

  return (
    <div className={style["container"]}>
      {searchResults && searchResults.map((body) => (
        <div key={body.id} className={style["result-item"]}>
          <span className={style["identification"]}>{body.englishName}</span>
          <span className={style["identification"]}>{body.bodyType}</span>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
