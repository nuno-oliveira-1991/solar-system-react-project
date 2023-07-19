import { useEffect } from "react";
import { useFormStatesContext } from "./../../components/Search/FormContext";
import style from "./home-styles.module.scss";
import ganymedesMoonImage from "./../../assets/images/ganymede.png";
import asteroidImage from "./../../assets/images/asteroid.png";

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
  console.log(allBodies)
  useEffect(() => {
    if (allBodies) {
      allBodies.map(async (body) => {
        let name = body.id;
        name.toLowerCase();
        
        if (body.bodyType === "Moon" && body.englishName !== "Moon")
          body.imageURL = ganymedesMoonImage;
        else if (body.bodyType === "Asteroid") body.imageURL = asteroidImage;
        else {
          const dynamicImage = await import(`./../../assets/images/${name}.png`);
          body.imageURL = dynamicImage.default;
        }
        return body;
      });
    }
  }, [allBodies]);

  return (
    <div className={style["container"]}>
      
    </div>
  )
}

export default Home