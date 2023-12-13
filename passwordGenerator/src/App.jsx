import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const generatePassword = useCallback(() => {
    let result = "";
    let numString = "0123456789";
    let mainString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charString = "!@#$%^&*()_+";
    let pool = mainString;
    if (isNumberAllowed) {
      pool += numString;
    }
    if (isCharacterAllowed) {
      pool += charString;
    }
    for (let i = 0; i < length; i++) {
      result += pool[Math.floor(Math.random() * pool.length)];
    }
    setPassword(result);
  }, [length, isNumberAllowed, isCharacterAllowed, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, isNumberAllowed, isCharacterAllowed, generatePassword]);
  const copyTextToClipBoard = useCallback(() => {
    passwordRef?.current.select();
    navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="bg-black h-screen w-screen p-9 flex flex-col items-center">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="overflow-hidden bg-slate-600 h-[30vh] w-[60vw] rounded-lg container flex flex-col justify-center items-center">
          <div className="m-3 overflow-hidden">
            <input
              type="text"
              placeholder="password"
              className="rounded-l-xl h-10 w-[300px] p-3"
              readOnly
              value={password}
              ref={passwordRef}
            />
            <button
              className="bg-blue-700 rounded-r-xl text-center text-white h-10 w-20"
              onClick={copyTextToClipBoard}
            >
              Copy
            </button>
          </div>
          <div className="flex gap-2">
            <input
              type="range"
              max={100}
              min={6}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
            <input
              type="checkbox"
              onChange={() => {
                setIsNumberAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
            <input
              type="checkbox"
              onChange={() => {
                setIsCharacterAllowed((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
