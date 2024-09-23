import { useEffect, useState } from "react";

const useProducts = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false`
    )
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);

  return [coins, setCoins];
};

export default useProducts;
