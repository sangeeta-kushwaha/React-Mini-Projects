import React from "react";
import products from "../assets/products";

const Card = ({ shoeImage, shoeName, shoePrice, handleAddToCart ,id }) => {

    const product = {shoeImage,shoeName,shoePrice,id}

  return (
    <div className="shadow-lg rounded-2xl p-5 flex flex-col items-center gap-3 w-60 mt-10">
      <img className="w-40 h-40 object-cover" src={shoeImage} alt="shoe1" />
      <h2 className="font-semibold text-lg">{shoeName}</h2>
      <p className="text-gray-600">${shoePrice}</p>
      <button
        onClick={() => handleAddToCart(product)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
