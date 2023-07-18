import { createContext, useContext, useState, useRef } from "react";

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
  const [searchMode, setSearchMode] = useState(false)
  const [isSearchInitialized, setIsSearchInitialized] = useState(false)
  const [isSearchSubmitted, setIsSearchSubmitted] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [searchResults, setSearchResults] = useState("");
  const [aboutMode, setAboutMode] = useState(false)
  const formRef = useRef(null);

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
    searchMode,
    setSearchMode,
    isSearchInitialized, 
    setIsSearchInitialized,
    isSearchSubmitted, 
    setIsSearchSubmitted,
    isFormSubmitted, 
    setIsFormSubmitted,
    searchResults, 
    setSearchResults,
    aboutMode, 
    setAboutMode,
    formRef
  };

  return (
    <FormStatesContext.Provider value={contextValue}>
      {children}
    </FormStatesContext.Provider>
  );
};