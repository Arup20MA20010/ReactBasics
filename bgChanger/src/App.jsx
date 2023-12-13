import { useState } from "react";
// import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("white");
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "black",
  ];
  const bgChanger = (color) => {
    setBgColor(color);
  };
  return (
    <>
      <div
        className="flex h-screen w-screen "
        style={{ backgroundColor: `${bgColor}` }}
      >
        <div className="flex self-end justify-between w-full mx-[200px] mb-9 bg-slate-600 h-fit p-4 rounded-xl">
          {colors.map((color) => (
            <button
              key={color}
              className="p-2 text-white text-center rounded-xl w-[60px]"
              style={{ backgroundColor: `${color}` }}
              onClick={() => {
                bgChanger(color);
              }}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
