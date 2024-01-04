import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCounter } from "../freatures/counter";
export function Counter() {
  const value = useSelector((state) => state.value);
  console.log("Outside use effect", value);
  useEffect(() => {
    console.log("Inside use effect", value);
  }, [value]);
  const [addValue, setAddValue] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="Number"
        placeholder="ammount"
        value={addValue}
        onChange={(e) => {
          setAddValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addCounter(addValue));
        }}
      >
        Add
      </button>
      <h1>{value}</h1>
    </div>
  );
}
