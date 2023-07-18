import { createContext, useContext, useState } from "react";

const FormStatesContext = createContext();

export const useFormStatesContext = () => {
  const context = useContext(FormStatesContext);
  if (!context) {
    throw new Error("useFormStatesContext must be used within a FormStatesContextProvider");
  }
  return context;
};

export const FormStatesContextProvider = ({ children }) => {
  const [allBodies, setAllBodies] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [filterType, setFilterType] = useState(undefined);
  const [filterTitle, setFilterTitle] = useState("Filters");
  const [bodyType, setBodyType] = useState(undefined);
  const [mass, setMass] = useState();
  const [gravity, setGravity] = useState("");
  const [density, setDensity] = useState("");
  const [isSearchInitialized, setIsSearchInitialized] = useState(false)
  const [isSearchSubmitted, setIsSearchSubmitted] = useState("");
  const [searchResults, setSearchResults] = useState("");

  const contextValue = {
    allBodies, 
    setAllBodies,
    isLoading, 
    setIsLoading,
    filterType,
    setFilterType,
    filterTitle,
    setFilterTitle,
    bodyType,
    setBodyType,
    mass,
    setMass,
    gravity,
    setGravity,
    density,
    setDensity,
    isSearchInitialized, 
    setIsSearchInitialized,
    isSearchSubmitted, 
    setIsSearchSubmitted,
    searchResults, 
    setSearchResults
  };

  return (
    <FormStatesContext.Provider value={contextValue}>
      {children}
    </FormStatesContext.Provider>
  );
};