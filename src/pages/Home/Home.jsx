import { useEffect } from "react"
import { useFormStatesContext } from "./../../contexts/FormContext"
import style from "./home-styles.module.scss"

const Home = () => {
  const { 
    setSearchMode,
    isSearchInitialized
  } = useFormStatesContext()

  useEffect(() => {
    if (!isSearchInitialized) setSearchMode(false)
  }, [isSearchInitialized])

  return (
    <div className={style["container"]}></div>
  )
}

export default Home