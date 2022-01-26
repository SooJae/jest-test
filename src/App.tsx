import { OrderContextProvider } from "./contexts/OrderContext";
import OrderPage from "./pages/OrderPage/OrderPage";
import { useState } from "react";
import SummaryPage from "./pages/SummaryPage/SummaryPage";
import CompletePage from "./pages/CompletePage/CompletePage";

function App() {
  const [step, setStep] = useState(0);
  return (
    <div style={{ padding: "4rem" }}>
      <OrderContextProvider>
        {step === 0 && <OrderPage setStep={setStep} />}
        {step === 1 && <SummaryPage />}
        {step === 2 && <CompletePage />}
      </OrderContextProvider>
    </div>
  );
}

export default App;
