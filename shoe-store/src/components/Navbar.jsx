import React from "react";

const Navbar = () => {
  return (
    <div className="bg-red-400 flex items-center gap-10 p-2 w-full fixed top-0 py-5">
      <span>
        <img
          src="https://i.pinimg.com/564x/d2/c1/6d/d2c16d99034f9407fd708dfc3356c688.jpg"
          alt="logo"
          width={30}
        />
      </span>
      <ul className="flex items-center gap-10">
        <li className="text-lg">Home</li>
        <li className="text-lg">Categories</li>
        <li className=" text-lg">About Us</li>
      </ul>
    </div>
  );
};

export default Navbar;
