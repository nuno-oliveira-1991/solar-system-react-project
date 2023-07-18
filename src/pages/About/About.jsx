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
      <h2>About this app</h2>
      <p>
        This app was made by Nuno Oliveira for a react project, during a full-stack development course, at EDIT, Porto.
        The data used in this website is from <a href="https://api.le-systeme-solaire.net/en/">The Solar System Open Data</a>,
        and by the way the model at the homepage is not to scale.
      </p>
    </div>
  )
}

export default About