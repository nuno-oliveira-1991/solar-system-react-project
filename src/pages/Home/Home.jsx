import { useEffect } from "react";
import { useFormStatesContext } from "./../../components/Search/FormContext";
import SystemModel from "./../../components/SystemModel/SystemModel"
import style from "./home-styles.module.scss";

const Home = () => {

  const { 
    setAllBodies,
    setIsLoading,
    setSearchMode,
    isSearchInitialized
  } = useFormStatesContext()

  useEffect(() => {
    if (!isSearchInitialized) setSearchMode(false)
  }, [isSearchInitialized])

  useEffect(() => {
    fetch("https://api.le-systeme-solaire.net/rest/bodies/")
      .then((response) => response.json())
      .then((data) => {
        const bodies = data.bodies
        setAllBodies(bodies)
        setIsLoading(false)
      });
  }, [])

  return (
    <div className={style["container"]}>
      <SystemModel />
    </div>
  )
}

export default Home