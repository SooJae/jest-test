import { createContext, useEffect, useMemo, useState } from "react";

export const OrderContext = createContext([]);

const pricePerItem: Record<"products" | "options", number> = {
  products: 1000,
  options: 500,
};

const calculateSubtotal = (
  orderType: "products" | "options",
  orderCounts: any
) => {
  let optionCount = 0;
  for (const count of orderCounts[orderType].values()) {
    optionCount += count;
  }

  return optionCount * pricePerItem[orderType];
};

export const OrderContextProvider = (props: any) => {
  const [orderCounts, setOrderCounts] = useState({
    products: new Map(),
    options: new Map(),
  });

  const [totals, setTotals] = useState({
    products: 0,
    options: 0,
    total: 0,
  });

  useEffect(() => {
    const productsTotal = calculateSubtotal("products", orderCounts);
    const optionsTotal = calculateSubtotal("options", orderCounts);
    const total = productsTotal + optionsTotal;
    setTotals({ products: productsTotal, options: optionsTotal, total });
  }, [orderCounts]);

  const value = useMemo(() => {
    const updateItemCount = (
      itemName: any,
      newItemCount: any,
      orderType: any
    ) => {
      const newOrderCounts = { ...orderCounts };
      const orderCountsMap = (orderCounts as any)[orderType];
      orderCountsMap.set(itemName, +newItemCount);
      setOrderCounts(newOrderCounts);
    };
    return [{ ...orderCounts, totals }, updateItemCount];
  }, [orderCounts, totals]);
  return <OrderContext.Provider value={value} {...props} />;
};
