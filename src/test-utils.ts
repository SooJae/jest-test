import { render, RenderOptions } from "@testing-library/react";
import { ReactElement, JSXElementConstructor } from "react";
import { OrderContextProvider } from "./contexts/OrderContext";

const customRender = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  options?: RenderOptions<
    typeof import("@testing-library/dom/types/queries"),
    HTMLElement
  >
) => render(ui, { wrapper: OrderContextProvider, ...options });

export * from "@testing-library/react";
export { customRender as render };
