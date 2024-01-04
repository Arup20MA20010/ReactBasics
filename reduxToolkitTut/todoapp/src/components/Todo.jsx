/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import {
  toggleEditMode,
  deleteTodo,
  toggleTodo,
} from "../feature/todo/todoSlice";
export default function Todo({ todo, className }) {
  const dispatch = useDispatch();
  const editMode = useSelector((state) => state.editMode);
  const editTodo = () => {
    if (editMode.toSave) return;
    dispatch(toggleEditMode({ id: todo.id, text: todo.text }));
  };
  const removeTodo = () => {
    dispatch(deleteTodo(todo.id));
  };
  return (
    <div
      className={`${className} ${
        editMode.updatedId === todo.id ? "hidden" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => {
          dispatch(toggleTodo(todo.id));
        }}
      />
      <input
        className={`w-[75vw] p-2 m-1 rounded-lg border-2 border-gray-400 ${
          todo.isCompleted ? "line-through text-gray-400" : "text-white"
        }`}
        type="text"
        value={todo.text}
        disabled
      />
      <button
        onClick={editTodo}
        className="rounded-md bg-green-500 p-2 w-[70px] mr-1"
      >
        Edit
      </button>
      <button
        onClick={removeTodo}
        className="rounded-md bg-red-600 p-2 w-[70px] "
      >
        Delete
      </button>
    </div>
  );
}
