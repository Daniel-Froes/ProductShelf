/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./AddCartButton.css";

const AddCartButton = () => {
  const [addToCart, setAddToCart] = useState(false);

  const handleAddToCart = () => {
    setAddToCart(!addToCart); 
  };

  return (
    <button
      className={"addCartButton" + (addToCart ? " addCartButton--active" : "")}
      onClick={() => handleAddToCart()}
    >
      {addToCart ? "Adicionado" : "Adicionar"}
    </button>
  );
};

export default AddCartButton;
