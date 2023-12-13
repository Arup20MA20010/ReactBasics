import { useId } from "react";

/* eslint-disable react/prop-types */
export default function InputBox({
  label,
  currency,
  onCurrencyChange,
  ammount,
  onAmmountChange,
  currencyOptions = [],
}) {
  const id = useId();
  return (
    <div className="bg-white flex justify-space rounded-md p-2 m-2">
      <div className="m-2">
        <label htmlFor={`${id}`}>{label}</label>
        <input
          id={`${id}`}
          type="number"
          className="w-full bg-transaprent outline-none py-1.5"
          placeholder="Ammount"
          value={ammount}
          onChange={(e) => onAmmountChange && onAmmountChange(e.target.value)}
        />
      </div>
      <div className="m-2 p-1">
        <p>Currency Type</p>
        <select
          value={currency || "usd"}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
