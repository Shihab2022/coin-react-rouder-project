import React from "react";
import useDetails from "../../hooks/SingleDetiles";

const CoinDetails = () => {
  // const {id}=useParams()
  const [coin] = useDetails();
  const {
    name,
    market_cap_rank,
    country_origin,
    contract_address,
    hashing_algorithm,
    genesis_date,
    last_updated,
    community_score,
    developer_score,
    liquidity_score,
    public_interest_score,
  } = coin;
//   console.log(coin);
  return (
    <div className="grid md:grid-cols-2 justify-center items-center md:px-20 md:py-10 bg-zinc-100">
      <div className="w-100 md:flex md:flex-col md:pl-60 py-10 md:justify-center  md:items-start">
        <div className="my-5">
          <h1 className="text-3xl my-2">General Info:</h1>
          <p>Coin Name : {name}</p>
          <p>Market Cap Rank : {market_cap_rank}</p>
          <p>Origin : {country_origin ? country_origin : "Not Found"}</p>
          <p>Contract Address : {contract_address} </p>
          <p>
            Hashing Algorithm :{" "}
            {hashing_algorithm ? hashing_algorithm : "Not Found"}{" "}
          </p>
          <p>Genesis Date : {genesis_date ? genesis_date : "Not Found"} </p>
          <p>Last Updated : {last_updated} </p>
        </div>
        <div >
          <h1 className="text-3xl my-2">Scores : </h1>
          <p>Community Score : {community_score} </p>
          <p>Developer Score : {developer_score}</p>
          <p>Liquidity Score : {liquidity_score}</p>
          <p>Public Interest Score : {public_interest_score}</p>
        </div>
      </div>
      <div className="w-100 flex py-10 justify-center items-center">
        <img src={coin.image?.large} alt="coin-img" />
      </div>
    </div>
  );
};

export default CoinDetails;
