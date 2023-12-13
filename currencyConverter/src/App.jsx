import { useState, useCallback } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [ammount, setAmmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmmount, setConvertedAmmount] = useState(0);
  const currencyData = useCurrencyInfo(from);
  const options = Object.keys(currencyData);

  const convert = useCallback(() => {
    console.trace();
    setConvertedAmmount(
      Number((ammount * currencyData[to]) / currencyData[from]).toFixed(2)
    );
  }, [currencyData, to, from, ammount]);
  const swap = () => {
    let temp = from;
    let tempAmmount = ammount;
    setFrom(to);
    setTo(temp);
    setAmmount(convertedAmmount);
    setConvertedAmmount(tempAmmount);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap items-center "
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-600 backdrop-blur-sm bg-white/30 h-fit flex justify-center items-center rounded-md">
        <form
          className="w-full h-fit m-2 p-3 flex flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-1/2 flex flex-col">
            <div className="w-full mb-1">
              <InputBox
                label={"From"}
                currency={from}
                currencyOptions={options}
                ammount={ammount}
                onAmmountChange={(val) => setAmmount(val)}
                onCurrencyChange={(val) => setFrom(val)}
              />
            </div>
            <div className="relative w-full h-0 5">
              <button
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1/2 mb-4">
              <InputBox
                label={"To"}
                currencyOptions={options}
                currency={to}
                ammount={convertedAmmount}
                onAmmountChange={(val) => setConvertedAmmount(val)}
                onCurrencyChange={(val) => setTo(val)}
              />
            </div>
          </div>
          <button className=" px-2 py-1 mx-3 bg-blue-600 text-white rounded-md">
            Convert from {from} to {to}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
