import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { OrderContext } from "../../contexts/OrderContext";

interface SummaryPageProps {
  setStep: Dispatch<SetStateAction<number>>;
}
const SummaryPage = ({ setStep }: SummaryPageProps) => {
  const [checked, setChecked] = useState(false);
  const [orderDatas] = useContext(OrderContext);

  const productsArray = Array.from((orderDatas as any).products);
  // @ts-ignore
  const productList = productsArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  const hasOptions = (orderDatas as any).options.size > 0;
  let optionsRender = null;
  if (hasOptions) {
    const optionsArray = Array.from((orderDatas as any).options.keys());
    // @ts-ignore
    const optionList = optionsArray.map((key) => <li key={key}>{key}</li>);
    optionsRender = (
      <>
        <h2>옵션: {(orderDatas as any).totals.options}</h2>
        <ul>{optionList}</ul>
      </>
    );
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStep(2);
  };
  return (
    <div>
      <h1>주문 확인</h1>
      <h2>여행 상품: {(orderDatas as any).totals.products}</h2>
      <ul>{productList}</ul>
      {optionsRender}
      <form onSubmit={handleSubmit}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          id="confirm-checkbox"
        />
        <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
        <br />
        <button disabled={!checked} type="submit">
          주문 확인
        </button>
      </form>
    </div>
  );
};

export default SummaryPage;
