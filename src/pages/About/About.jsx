import { useEffect } from "react"
import style from "./about-style.module.scss"
import { useFormStatesContext } from "../../components/Search/FormContext"

const About = () => {
  const{setAboutMode} = useFormStatesContext()
  
  useEffect(() => {
    setAboutMode(true)
  })

  return (
    <div className={style["container"]}>
      <h1>The Solar System</h1>
      <div>
        <div className={style["solar-system-info"]}>
          <p >
            The Solar System is a fascinating and vast celestial neighborhood that encompasses our home planet, 
            Earth, along with an incredible array of other celestial bodies. At its center lies the Sun, a blazing 
            star that radiates energy and light, providing the life-giving warmth that sustains life on Earth. 
            Orbiting the Sun are eight planets, like Mercury, Venus, Mars, Jupiter, Saturn, Uranus, and Neptune. 
            Each planet possesses its own unique characteristics, from the scorching temperatures of Venus to the 
            breathtaking rings of Saturn.
            Beyond the planets, there are numerous other celestial objects, such as moons, asteroids, comets, and
            dwarf planets, all of which contribute to the diverse and dynamic nature of our Solar System. Additionally, 
            the region beyond Neptune is home to a vast array of icy objects, forming the Kuiper Belt, with Pluto being 
            one of its most famous members.
          </p>
        </div>
        <div className={style["app-info"]}>
          <h3>About this app</h3>
          <p>
            This app was made by Nuno Oliveira for a React.js project, during a Full-stack web development course, at EDIT, Porto.
            The data used in this website is sourced from <a href="https://api.le-systeme-solaire.net/en/">The Solar System Open Data</a>,
            and the images are from <a href="https://www.wikipedia.org/">Wikipedia</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About