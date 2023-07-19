import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormStatesContext } from "./../../components/Search/FormContext";
import style from "./body-detail-style.module.scss";

const BodyDetail = () => {
  const { detailMode, setDetailMode, searchResults } = useFormStatesContext();
  const navigate = useNavigate();
  const { englishName } = useParams();

  useEffect(() => {
    setDetailMode(true);
  }, []);
  
  const selectedBody = searchResults.find(
    (body) => body.englishName === englishName
  );

  const { bodyType, imageURL } = selectedBody;
    console.log(imageURL)
  return (
    <>
      {detailMode && (
        <div className={style["container"]}>
          <button
            onClick={() => {
              navigate("/search");
              setDetailMode(false);
            }}
            className={style["go-back-button"]}
          >
            &#8630;
          </button>
          <div className={style["image"]}>
            <img src={imageURL}></img>
          </div>
          <div className={style["info"]}>
            <h1>{englishName}</h1>
            <p>Body Type: {bodyType}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BodyDetail;
