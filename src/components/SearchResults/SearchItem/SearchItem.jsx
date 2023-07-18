import { Link } from "react-router-dom"

import style from "./search-item-style.module.scss"

const SearchItem = ({ bodyType, bodyName, bodyId }) => {

  return (
    <Link 
      key={`${bodyName}-${bodyId}`} 
      style={{ textDecoration: 'none', height: '100%' }} 
      to={{
        pathname: `/search/${bodyName}`,
        state: {
          bodyName,
          bodyType
        }
      }}>
      <div className={style["result-item"]}>
        <span className={style["identification"]}>{bodyName}</span>
        <span className={style["identification"]}>{bodyType}</span>
      </div>
    </Link>
  )
}

export default SearchItem