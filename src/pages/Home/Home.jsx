import { useEffect } from "react";
import { useFormStatesContext } from "./../../components/Search/FormContext";
import style from "./home-styles.module.scss";

const Home = () => {
  const { 
    allBodies,
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
        console.log(data)
        const bodies = data.bodies
        setAllBodies(bodies)
        setIsLoading(false)
      });
  }, [])

  useEffect(() => {
    if (allBodies) {
      allBodies.map((body) => {
        let name = body.englishName;
        let nameLow = name.toLowerCase();
  
        if (body.englishName === "Moon") body.imageURL = `./../../assets/images/moon.png`;
        else if (body.bodyType === "Moon" && body.englishName !== "Moon") body.imageURL = `./../../assets/images/ganimedes-moon.png`;
        else if (body.bodyType === "asteroid")  body.imageURL = `./../../assets/images/asteroid.png`
        else { body.imageURL = `./../../assets/images/${nameLow}.png`}
        return body
      });
    }
  }, [allBodies]);

  return (
    <div className={style["container"]}>
      
    </div>
  )
}

export default Home