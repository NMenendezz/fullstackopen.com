import { useState } from "react";
import Country from "./Country";

const Button = ({ countryShow }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  if (!show) {
    return <button onClick={handleClick}>{!show ? "show" : "hide"}</button>;
  } else {
    return (
      <>
        <button onClick={handleClick}>{!show ? "show" : "hide"}</button>
        <Country country={countryShow} />
      </>
    );
  }
};

export default Button;
