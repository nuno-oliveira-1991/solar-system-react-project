import { createContext, useContext, useState } from "react"

const FormStatesContext = createContext();

export const useFormStatesContext = () => {
  const context = useContext(FormStatesContext)
  if (!context) {
    throw new Error("useFormStatesContext must be used within a FormStatesContextProvider")
  }
  return context
};

export const FormStatesContextProvider = ({ children }) => {
  const [allBodies, setAllBodies] = useState(undefined)
  const [isLoading, setIsLoading] = useState(true)
  const [filterType, setFilterType] = useState(undefined)
  const [filterTitle, setFilterTitle] = useState("Filters")
  const [bodyType, setBodyType] = useState(undefined)
  const [massValue, setMassValue] = useState("")
  const [massExponent, setMassExponent] = useState("")
  const [mass, setMass] = useState("")
  const [gravity, setGravity] = useState("")
  const [density, setDensity] = useState("")
  const [mainPlanet, setMainPlanet] = useState(undefined)
  const [searchMode, setSearchMode] = useState(false)
  const [isSearchInitialized, setIsSearchInitialized] = useState(false)
  const [isSearchSubmitted, setIsSearchSubmitted] = useState(undefined)
  const [firstSearch, setFirstSearch] = useState(true)
  const [searchResults, setSearchResults] = useState(undefined)
  const [aboutMode, setAboutMode] = useState(false)
  const [detailMode, setDetailMode] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [validationError, setValidationError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)  

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
    massExponent,
    setMassExponent,
    massValue,
    setMassValue,
    mass,
    setMass,
    gravity,
    setGravity,
    density,
    setDensity,
    mainPlanet,
    setMainPlanet,
    searchMode,
    setSearchMode,
    isSearchInitialized, 
    setIsSearchInitialized,
    isSearchSubmitted, 
    setIsSearchSubmitted,
    firstSearch,
    setFirstSearch,
    searchResults, 
    setSearchResults,
    aboutMode, 
    setAboutMode,
    detailMode,
    setDetailMode, 
    isSubMenuOpen, 
    setIsSubMenuOpen,
    validationError, 
    setValidationError,
    errorMessage, 
    setErrorMessage
  }

  return (
    <FormStatesContext.Provider value={contextValue}>
      {children}
    </FormStatesContext.Provider>
  )
}