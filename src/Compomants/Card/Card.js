import React from "react";
import { Link } from "react-router-dom";

const Card = ({ coin }) => {
  const { name, image, symbol } = coin;
//   console.log(coin);
  return (
    <div>
      <Link to={`/coin-details/${coin.id}`}>
        <div className="flex gap-20   m-5 justify-around items-center bg-sky-200 shadow-lg rounded-lg">
          <img src={image} className="w-[75px] rounded-full py-3 " alt="" />
          <div>
            <p className="text-xl text-black">{name}</p>
            <p className="text-stone-600 text-sm">{symbol}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
