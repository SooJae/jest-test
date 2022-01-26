import Type from "./Type";
import { Dispatch, SetStateAction, useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

interface OrderPageProps {
  setStep: Dispatch<SetStateAction<number>>;
}
const OrderPage = ({ setStep }: OrderPageProps) => {
  const [orderDatas] = useContext(OrderContext);
  return (
    <div>
      <h1>Travel Products</h1>
      <div>
        <Type orderType="products" />
      </div>
      <div style={{ display: "flex", marginTop: 20 }}>
        <div style={{ width: "50%" }}>
          <Type orderType="options" />
        </div>
        <div>
          {/*@ts-ignore*/}
          <h2>Total Price: {orderDatas.totals.total}</h2>
          <br />
          <button onClick={() => setStep(1)}>주문하기</button>
          {/*<Type orderType="options" />*/}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
