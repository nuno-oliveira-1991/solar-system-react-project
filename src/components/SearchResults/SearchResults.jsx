import { useEffect, useState} from "react"

import style from "./search-results-styles.module.scss"

const SearchResults = ({ showResults, bodies, filterType, bodyType, mass, gravity, density }) => {
  const [searchResults, setSearchResults] = useState(null)

  useEffect(() => {
    let bodiesThatMatched;
    if (filterType === "bodyType") {
      bodiesThatMatched = bodies.filter((body) => body.bodyType === bodyType);
      setSearchResults(bodiesThatMatched);
    }
    if (filterType === "mass") {
      bodiesThatMatched = bodies.filter((body) => (body.mass.massValue ** body.mass.massExponent) >= mass);
      setSearchResults(bodiesThatMatched);
    }
    if (filterType === "gravity") {
      bodiesThatMatched = bodies.filter((body) => body.gravity >= gravity);
      setSearchResults(bodiesThatMatched);
    }
    if (filterType === "density") {
      bodiesThatMatched = bodies.filter((body) => body.density >= density);
      setSearchResults(bodiesThatMatched);
    }
    console.log(bodiesThatMatched)
  }, [filterType, bodyType, showResults]);

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

export default SearchResults