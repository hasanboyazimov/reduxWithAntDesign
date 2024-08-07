import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Space, Button } from "antd";
import { Image } from "antd";

function SingleCard({ product }) {
  const dispatch = useDispatch();
  const [addButtons, setAddButtons] = useState(false);

  useEffect(() => {
    if (product.amount === 0 || !product.amount) {
      setAddButtons(false);
    } else {
      setAddButtons(true);
    }
  }, [product.amount]);

  return (
    <Space direction="vertical" size={16}>
      <Card
        title={product.name}
        extra={<a href="#">More</a>}
        style={{ width: "300px", height: "550px", marginBottom: "25px" }}
      >
        <Image src={product.thumbnail} />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Quantity: {product.amount ? product.amount : 0}</p>
        {/* <Button onClick={handleIncrement}>Add</Button> */}
        {addButtons && (
          <>
            <Button onClick={handleDecrement}>Remove</Button>
          </>
        )}
      </Card>
    </Space>
  );
}

export default SingleCard;
