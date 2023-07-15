import { useState, useEffect } from "react";
import BodyForm from "../../components/BodyForm/BodyForm"

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
      <h2>THE SOLAR SYSTEM</h2>
      {isLoading == false && <BodyForm bodies={allBodies} />}
    </div>
  )
}

export default Home