import React from "react";
import cl from "./Button.module.css";
const Button = ({ text, onClick, style }) => {
  return (
    <button
      className={cl.btn}
      //  className={cl.className}
      onClick={onClick}
      style={style}
    >
      {text}
    </button>
  );
};


export default Button;
