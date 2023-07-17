import { createContext, useContext, useState, useEffect } from "react";

const FormStatesContext = createContext();

export const useFormStatesContext = () => {
  const context = useContext(FormStatesContext);
  if (!context) {
    throw new Error("useFormStatesContext must be used within a FormStatesContextProvider");
  }
  return context;
};

export const FormStatesContextProvider = ({ children }) => {
  const [filterType, setFilterType] = useState("");
  const [filterTitle, setFilterTitle] = useState("Filters");
  const [bodyType, setBodyType] = useState(undefined);
  const [mass, setMass] = useState();
  const [gravity, setGravity] = useState("");
  const [density, setDensity] = useState("");
  const [isSearchInitialized, setIsSearchInitialized] = useState(false)
  const [isSearchSubmitted, setIsSearchSubmitted] = useState("");

  const contextValue = {
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
  };

  return (
    <FormStatesContext.Provider value={contextValue}>
      {children}
    </FormStatesContext.Provider>
  );
};