import React, { useId } from "react";

function Card({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className="h-[16vh] w-[98%] bg-white rounded-2xl mx-auto p-4 grid items-center">
      <div className="flex justify-between items-center text-gray-400 font-semibold">
        <label htmlFor={amountInputId}>{label}</label>
        <p>Currency Type</p>
      </div>

      <div className="flex justify-between items-cente font-semibold">
        <input
          id={amountInputId}
          className="border-none outline-none"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />

        <select
          className="border-none outline-none bg-gray-200 px-2 py-1.5 rounded-lg"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency, ind) => (
            <option key={ind} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Card;
