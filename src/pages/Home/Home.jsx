import { useState, useEffect } from "react";
import Search from "./../Search/Search"
import SystemModel from "./../../components/SystemModel/SystemModel"

import style from "./home-styles.module.scss"


const Home = () => {
  const [allBodies, setAllBodies] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

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
      <div className={style["search-panel"]}>
        {isLoading == false && <Search bodies={allBodies} />}
      </div>
      <div className={style["model-panel"]}>
        <SystemModel />
      </div>
    </div>
    
  )
}

export default Home