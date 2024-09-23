import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState([]);
  useEffect(() => {
    const url = `${process.env.REACT_APP_BASE_URL}/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setCoin(data));
  }, [id]);

  return [coin, setCoin];
};

export default useDetails;
