import style from "./body-detail-style.module.scss"

const BodyDetail = () => {


  return (

    <div className={style["container"]}>
      <div className={style["image"]}></div>
      <div className={style["info"]}>
        Body Detail...
      </div>
    </div>
  )
}

export default BodyDetail