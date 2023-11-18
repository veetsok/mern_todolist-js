import React from "react";

const ButtonInput = ({ className }) => {
  return (
    <button className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M5 3.737l12.395 8.263-12.395 8.263v-16.526zm-2-3.737v24l18-12-18-12z" />
      </svg>
    </button>
  );
};

export default ButtonInput;
