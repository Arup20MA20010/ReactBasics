import { useState, useEffect } from "react";
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json
export default function useCurrencyInfo(currency) {
  const [currencyInfo, setCurrencyInfo] = useState({});
  useEffect(() => {
    async function getCurrencyInfo() {
      const response = await fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      );
      const jsonedResponse = await response.json();
      setCurrencyInfo(jsonedResponse[currency]);
    }
    getCurrencyInfo();
  }, [currency]);
  console.log(currency);
  console.log(currencyInfo);
  return currencyInfo;
}
