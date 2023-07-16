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
  const [filterType, setFilterType] = useState(null);
  const [filterTitle, setFilterTitle] = useState("Filters");
  const [bodyType, setBodyType] = useState(null);
  const [mass, setMass] = useState(null);
  const [gravity, setGravity] = useState("");
  const [density, setDensity] = useState("");
  const [showResults, setShowResults] = useState(false)

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
    showResults,
    setShowResults
  };

  return (
    <FormStatesContext.Provider value={contextValue}>
      {children}
    </FormStatesContext.Provider>
  );
};