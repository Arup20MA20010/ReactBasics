import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, toggleEditMode } from "../feature/todo/todoSlice";
import { useEffect, useState } from "react";
export default function TodoForm() {
  const [todoText, setTodoText] = useState("");
  const editMode = useSelector((state) => state.editMode);
  const dispatch = useDispatch();
  useEffect(() => {
    if (editMode.toSave && editMode.inputValue) {
      setTodoText(editMode.inputValue);
    }
  }, [editMode.inputValue, editMode.toSave]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (editMode.toSave) {
      dispatch(updateTodo({ id: editMode.updatedId, text: todoText }));
      dispatch(toggleEditMode());
    } else {
      dispatch(addTodo(todoText));
    }
    setTodoText("");
  };
  return (
    <div className="mt-[20vh]">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Write your todo"
          value={todoText}
          className="p-2 text-black w-[50vw] border-2 border-gray-400 rounded-l-lg"
          onChange={(e) => {
            setTodoText(e.target.value);
          }}
        />
        <button className="p-2 bg-blue-400 border-2 border-gray-400 rounded-r-lg">
          {editMode.toSave ? "Save" : "Add"}
        </button>
      </form>
    </div>
  );
}
