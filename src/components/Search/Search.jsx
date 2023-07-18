import { useEffect, useRef } from "react";
import { useFormStatesContext } from "./FormContext";
import FilterInput from "../FilterInput/FilterInput";
import SearchResults from "../SearchResults/SearchResults";
import style from "./search-styles.module.scss";

const Search = () => {

  const {
    filterType,
    setFilterType,
    filterTitle,
    setFilterTitle,
    isSearchInitialized,
    setIsSearchInitialized,
    isSearchSubmitted,
    setIsSearchSubmitted,
    isFormSubmitted,
    setIsFormSubmitted
  } = useFormStatesContext();

  const resetForm = () => {
    setFilterType("");
    setFilterTitle("Filters");
    setBodyType("");
    setMass("");
    setGravity("");
    setDensity("");
    setIsSearchInitialized(false);
    setIsSearchSubmitted(false);
  };

  const getSearchResults = (event) => {
    event.preventDefault();
    if (!isSearchInitialized) {
      setIsSearchInitialized(true);
      setIsSearchSubmitted(true);
    } else {
      setIsSearchSubmitted(true);
      setIsSearchInitialized(true);
    }
  
    setIsFormSubmitted(true);
  };

  useEffect(() => {
    if (isFormSubmitted) setIsFormSubmitted(false)
  }, [isFormSubmitted])

  useEffect(() => {
    if (filterType) setFilterTitle(filterType.charAt(0).toUpperCase() + filterType.slice(1));
  }, [filterType]);

  useEffect(() => {
    if (isSearchSubmitted) {
      setIsSearchSubmitted(false);
    }
  }, [isSearchSubmitted]);

  return (
      <div className={style["container"]}>
        <form onSubmit={getSearchResults}>
          <div className={style["header"]}>
            <div className={`${style["filter-menu"]} ${"btn btn--blue"}`}>
              {filterTitle}
              <ul className={style["filter-menu-content"]}>
                <li onClick={() => setFilterType("bodyType")}>Body Type</li>
                <li onClick={() => setFilterType("mass")}>Mass</li>
                <li onClick={() => setFilterType("gravity")}>Gravity</li>
                <li onClick={() => setFilterType("density")}>Density</li>
              </ul>
            </div>
            <FilterInput />
            <button className="btn btn--green" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
  );
};

export default Search;
