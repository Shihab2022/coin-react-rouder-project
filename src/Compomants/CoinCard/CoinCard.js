import React from "react";
import useProducts from "../../hooks/getAllCoin";
import Card from "../Card/Card";

const CoinCard = () => {
  const [coins, setCoins] = useProducts();
  // console.log(coins)
  return (
    <div>
      <div>
        <h1 className=" text-center text-4xl font-bold my-5">
          Available Crypto Currencies
        </h1>
        <h2 className=" text-center text-3xl mb-2 text-stone-600">
          Total coins: {coins.length}
        </h2>
      </div>

      <div className="grid md:grid-cols-4 px-40">
        {coins.map((coin) => (
          <Card coin={coin} key={coin.ath}></Card>
        ))}
      </div>
    </div>
  );
};

export default CoinCard;
