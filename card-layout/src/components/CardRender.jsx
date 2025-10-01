import React from 'react'
import Card from './Card';

const CardRender = () => {
     let card = [
       {
         img: "https://images.pexels.com/photos/33984908/pexels-photo-33984908.jpeg",
         cardNumber: "card 1",
         cardDescription: " this is card 1 description",
       },
       {
         img: "https://images.pexels.com/photos/8285057/pexels-photo-8285057.jpeg",
         cardNumber: "card 2",
         cardDescription:
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ab?,",
       },
       {
         img: "https://images.pexels.com/photos/31950361/pexels-photo-31950361.jpeg",
         cardNumber: "card 3",
         cardDescription:
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ab?,",
       },
       {
         img: "https://images.pexels.com/photos/32984814/pexels-photo-32984814.jpeg",
         cardNumber: "card 4",
         cardDescription:
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ab?,",
       },
       {
         img: "https://images.pexels.com/photos/6090257/pexels-photo-6090257.jpeg",
         cardNumber: "card 5",
         cardDescription:
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ab?,",
       },
       {
         img: "https://images.pexels.com/photos/31950361/pexels-photo-31950361.jpeg",
         cardNumber: "card 6",
         cardDescription:
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ab?,",
       },

       {
         img: "https://images.pexels.com/photos/33984908/pexels-photo-33984908.jpeg",
         cardNumber: "card 7",
         cardDescription:
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ab?,",
       },
       {
         img: "https://images.pexels.com/photos/8285057/pexels-photo-8285057.jpeg",
         cardNumber: "card 8",
         cardDescription:
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ab?,",
       },
       {
         img: "https://images.pexels.com/photos/31950361/pexels-photo-31950361.jpeg",
         cardNumber: "card 9",
         cardDescription:
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ab?,",
       },
       {
         img: "https://images.pexels.com/photos/32984814/pexels-photo-32984814.jpeg",
         cardNumber: "card 10",
         cardDescription:
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ab?,",
       },
       {
         img: "https://images.pexels.com/photos/6090257/pexels-photo-6090257.jpeg",
         cardNumber: "card 11",
         cardDescription:
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ab?,",
       },
       {
         img: "https://images.pexels.com/photos/31950361/pexels-photo-31950361.jpeg",
         cardNumber: "card 12",
         cardDescription:
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ab?,",
       },
     ];
  return (
    
      
      <div className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {card.map((card, index) => (
          <Card
            key={index}
            cardImage={card.img}
            cardNumber={card.cardNumber}
            cardDescription={card.cardDescription}
          />
        ))}
      </div>
  
  );
}

export default CardRender
