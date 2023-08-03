import { useState, useEffect } from "react"
import { useFormStatesContext } from "./../../contexts/FormContext"
import style from "./home-styles.module.scss"
import RandomFact from "./RandomFact/RandomFact"

const Home = () => {
  const { 
    setSearchMode,
    isSearchInitialized
  } = useFormStatesContext()

  useEffect(() => {
    if (!isSearchInitialized) setSearchMode(false)
  }, [isSearchInitialized])

  return (
    <div className={style["container"]}>
      <RandomFact />
    </div>
  )
}

export default Home