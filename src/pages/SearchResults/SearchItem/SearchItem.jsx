import { useEffect } from "react"
import { useFormStatesContext } from "./../../../contexts/FormContext"
import { Link } from "react-router-dom"
import style from "./search-item-style.module.scss"

const SearchItem = ({ bodyType, bodyName, bodyId, vol, sideralOrbit }) => {
  const { setFirstSearch } = useFormStatesContext()

  useEffect(() =>{
    setFirstSearch(false)
  }, [])
  
  return (
    <Link 
      key={`${bodyName}-${bodyId}`} 
      style={{ textDecoration: 'none', height: '100%' }} 
      to={`/search/${bodyId}`}>
      <div className={style["result-item"]}>
        <span className={style["identification"]}>{bodyName}</span>
        <span className={style["identification"]}>{bodyType}</span>
        <span className={style["attribute"]}>{vol ? `${vol.volValue * Math.pow(10, vol.volExponent)} km3` : "unknown"}</span>
        <span className={style["attribute"]}>{sideralOrbit} days</span>
        <pre>{JSON.stringify(location.state, null, 2)}</pre>
      </div>
    </Link>
  )
}

export default SearchItem