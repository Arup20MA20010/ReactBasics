import { useState } from "react";
import { TodoProvider } from "./context/todocontext";
import TodoForm from "./components/todoForm";
import Todos from "./components/todos";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const updateTodo = (todoId, todoMsg) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.msg = todoMsg;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };
  const toggleTodo = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      })
    );
  };

  const toggleEditable = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) todo.isEditable = !todo.isEditable;
        return todo;
      })
    );
  };
  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleTodo,
        toggleEditable,
      }}
    >
      <div className="flex flex-col justify-center items-center mt-[100px]">
        <TodoForm />
        <ul className="m-2 p-2">
          {todos.map((todo) => (
            <li key={todo.id}>
              <Todos todo={todo} />
            </li>
          ))}
        </ul>
      </div>
    </TodoProvider>
  );
}
