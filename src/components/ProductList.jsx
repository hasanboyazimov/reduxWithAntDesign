import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { useDispatch, useSelector } from "react-redux";

function ProductsList() {
  const [all, setAll] = useState([]);

  useEffect(() => {
    fetch(
      `https://online-json-server-api.up.railway.app/project/66b05cd2340dd55056fb3cb5/products`
    )
      .then((res) => res.json())
      .then((data) => setAll(data.data));
  }, []);

  return (
    <div>
      <div>
        {all &&
          all?.map((product) => {
            return <SingleCard product={product} key={product.id} />;
          })}
      </div>
    </div>
  );
}

export default ProductsList;
