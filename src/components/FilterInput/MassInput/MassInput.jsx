import React, { useEffect } from "react";
import { useFormStatesContext } from "../../../contexts/FormContext";
import style from "./../filter-input-styles.module.scss";

const MassInput = () => {
  const {
    massExponent,
    setMassExponent,
    massValue,
    setMassValue,
    mass,
    setMass,
    validationError,
    setValidationError,
    errorMessage,
    setErrorMessage,
  } = useFormStatesContext();

  useEffect(() => {
    setValidationError(false);
  }, []);

  useEffect(() => {
    const value = parseFloat(massValue);
    const exponent = parseFloat(massExponent);

    if (!isNaN(value) && !isNaN(exponent)) {
      setMass(value * Math.pow(10, exponent));
    }
  }, [massValue, massExponent]);

  const handleInputValidation = (event, maxValue, string) => {
    const { value } = event.target;
    const isValidNumber = !isNaN(parseFloat(value));
  
    if (value === '' || (isValidNumber && (value >= 0 && value <= maxValue))) {
      setValidationError(false);
      setErrorMessage('');
    } else {
      setValidationError(true);
      setErrorMessage(`${string} must be a number and equal or lesser than ${maxValue}.`);
    }
    if (event.target.name === "massValue" && (value === '' || isValidNumber)) {
      setMassValue(value);
    } else if (event.target.name === "massExponent" && (value === '' || isValidNumber)) {
      setMassExponent(value);
    }
  };

  return (
    <>
      <span className={style["filter-menu"]}>
        {mass === undefined && <span>Choose mass</span>}
        {mass >= 0 && <span>at least {mass} kg</span>}
      </span>
      <ul className={style["filter-menu-content"]}>
        <li>
          <label>Value</label>
          <input
            type="number"
            className={style["input"]}
            value={massValue}
            name="massValue"
            onChange={(event) => {
              handleInputValidation(event, 30, "Mass value");
            }}
            required
          />
          <label>Exponent</label>
          <input
            type="number"
            className={style["input"]}
            value={massExponent}
            name="massExponent"
            onChange={(event) => {
              handleInputValidation(event, 28, "Exponent value");
            }}
            required
          />
        </li>
        {validationError && <span className={style["error-message"]}>{errorMessage}</span>}
      </ul>
    </>
  );
};

export default MassInput;
