import { createContext, useContext } from "react";

const todoContext = createContext({
  todos: [
    {
      id: 1,
      msg: "Todo 1",
      completed: false,
      isEditable: false,
    },
  ],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleTodo: () => {},
  toggleEditable: () => {},
});

export const TodoProvider = todoContext.Provider;

export const useTodo = () => {
  return useContext(todoContext);
};
