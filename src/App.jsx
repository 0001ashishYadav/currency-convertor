import Card from "./components/Card";
import "./index.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  // fetch url
  const url =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20230616/pngtree-cryptocurrency-cardano-or-ada-coins-depicted-in-a-3d-render-with-image_3610675.jpg')",
        }}
        className="flex justify-center items-center h-screen w-full bg-no-repeat bg-cover fixed inset-x-0 bg-center"
      >
        <div className="max-w-[600px] w-full h-[47vh] bg-[#ffffff72] relative rounded-3xl shadow-lime-100 border-2 border-white p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="grid gap-3">
              <Card
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />

              <Card
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            {/* convert button */}

            <div className="flex justify-center items-center mt-4">
              <button
                type="submit"
                className="h-[6vh] w-[98%] bg-blue-700 rounded-md text-white"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase}
              </button>
            </div>

            {/* swap button */}

            <div className="absolute top-[17vh] left-[50%] translate-x-[-50%]">
              <button
                onClick={swap}
                className="bg-blue-700 text-white px-3 py-1 rounded-md border-2 border-white"
              >
                Swap
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
