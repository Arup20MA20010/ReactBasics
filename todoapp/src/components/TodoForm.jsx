import { useState } from "react";
import { useTodo } from "../context/todocontext";

export default function TodoForm() {
  const [todomsg, setTodomsg] = useState("");

  const { addTodo } = useTodo();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo({
          id: Date.now(),
          msg: todomsg,
          completed: false,
          isEditable: false,
        });
        setTodomsg("");
      }}
      className="flex"
    >
      <input
        type="text"
        value={todomsg}
        placeholder="Write your todo"
        className="text-white bg-slate-400 w-[55vw] p-5 rounded-l-md "
        onChange={(e) => setTodomsg(e.target.value)}
      />
      <button type="submit" className="bg-blue-300 p-5 rounded-r-md ">
        Add
      </button>
    </form>
  );
}
