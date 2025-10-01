import React from "react";

const Card = ({ cardImage, cardNumber, cardDescription }) => {
  return (
    <div className="flex flex-col justify-center items-center border border-purple-300 py-5 px-3 m-10  animated-border">
      <img
        src={cardImage}
        alt="img"
        width={200}
        height={200}
      
      />
      <h2 className="font-bold">{cardNumber}</h2>
      <p>{cardDescription}</p>
    </div>
  );
};

export default Card;
