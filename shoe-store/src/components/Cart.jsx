import React from "react";
import { MdDelete } from "react-icons/md";

const Cart = ({ items, increaseQuantity, decreaseQuantity }) => {
  const total = items.reduce(
    (acc, item) => acc + item.shoePrice * item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 flex flex-col items-center my-10 w-[20rem] py-3 rounded-xl fixed top-10">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        items.map((item, index) => (
          <div key={index} className="flex items-center gap-4 my-3">
            <img src={item.shoeImage} alt={item.shoeName} width={60} />
            <div>
              <h3 className="font-semibold">{item.shoeName}</h3>
              <div className="flex gap-10 items-center">
                <h4>${item.shoePrice}</h4>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="border border-black px-2"
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="border border-black px-2"
                  >
                    +
                  </button>
                  <button>
                    <MdDelete className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      {items.length > 0 && <h3 className="font-bold mt-4">Total: ${total}</h3>}
    </div>
  );
};

export default Cart;
