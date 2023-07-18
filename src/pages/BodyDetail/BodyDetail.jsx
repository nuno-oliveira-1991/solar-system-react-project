import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useFormStatesContext } from "./../../components/Search/FormContext"
import style from "./body-detail-style.module.scss"

const BodyDetail = () => {
  const {
    detailMode,
    setDetailMode,
  } = useFormStatesContext();

  const navigate = useNavigate();

useEffect(() => {
  setDetailMode(true);
}, []);

  return (
    <>
      {detailMode && <div className={style["container"]}>
        <button onClick={() => {navigate("/search"); setDetailMode(false)}} className={style["go-back-button"]}>&#8630;</button>
        <div className={style["image"]}></div>
        <div className={style["info"]}>
        <h1></h1>
        Body Detail...
        </div>
      </div>}
    </> 
  )
}

export default BodyDetail