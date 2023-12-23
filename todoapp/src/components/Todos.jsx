/* eslint-disable react/prop-types */

import { useState } from "react";
import { useTodo } from "../context/todocontext";

export default function Todos({ todo }) {
  const { toggleEditable, toggleTodo, updateTodo, deleteTodo } = useTodo();
  const [todomsg, setTodomsg] = useState(`${todo.msg}`);

  const saveOrEditTodo = () => {
    toggleEditable(todo.id);

    if (todo.isEditable) {
      updateTodo(todo.id, todomsg);
    }
  };

  return (
    <div className="flex">
      <input
        type="checkbox"
        checked={todo.comleted}
        onChange={() => {
          toggleTodo(todo.id);
        }}
        className="m-1"
      />
      <input
        type="text"
        value={todomsg}
        className={`text-white p-2 rounded-md ${
          todo.completed ? "bg-red-600 line-through" : ""
        } bg-slate-800 w-[70vw] ${
          todo.isEditable ? "border-2 border-dashed border-blue-600" : ""
        }`}
        onChange={(e) => {
          setTodomsg(e.target.value);
        }}
        disabled={!todo.isEditable}
      />
      <button onClick={saveOrEditTodo} className="m-2">
        {todo.isEditable ? "📁" : "✏️"}
      </button>
      <button onClick={() => deleteTodo(todo.id)} className="m-2">
        ❌
      </button>
    </div>
  );
}
