import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='sticky top-0 bg-slate-200 px-12 py-8 flex justify-center md:justify-between'>
      <div className='hidden md:block text-3xl'>
        <h1>CRYPTO CAFE</h1>
      </div>
      <div className="flex gap-4 text-xl ">
        <Link to="/">Home</Link>
        <Link to="/coin">Coins</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Header;
