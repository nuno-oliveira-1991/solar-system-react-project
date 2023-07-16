import style from "./system-model-styles.module.scss"

const SystemModel = () => {

  return (
    <div className={style["background"]}>
      <div className={style["solar-system"]}>
        <div className={style["sun"]}></div>
        <div className={style["orbit"]}><div className={style["mercury"]}></div></div>
        <div className={style["orbit"]}><div className={style["venus"]}></div></div>
        <div className={style["orbit"]}><div className={style["earth"]}></div></div>
        <div className={style["orbit"]}><div className={style["mars"]}></div></div>
        <div className={style["orbit"]}><div className={style["jupiter"]}></div></div>
        <div className={style["orbit"]}><div className={style["saturn-ring"]}><div className={style["saturn"]}></div></div></div>
        <div className={style["orbit"]}><div className={style["uranus"]}></div></div>
        <div className={style["orbit"]}><div className={style["neptune"]}></div></div>
      </div>
    </div>
  )
}

export default SystemModel