import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    // {
    //   id: 1,
    //   text: "text",
    //   isCompleted: false,
    // },
  ],
  editMode: {
    toSave: false,
    updatedId: null,
    inputValue: "",
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),

        text: action.payload,
        isCompleted: false,
      };
      state.todos.push(todo);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;

      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          todo.text = text;
        }
        return todo;
      });
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    toggleTodo: (state, action) => {
      const id = action.payload;

      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
    },
    toggleEditMode: (state, action) => {
      if (state.editMode.toSave) {
        state.editMode.toSave = false;
        state.editMode.updatedId = null;
        state.editMode.inputValue = "";
      } else {
        const { id, text } = action.payload;
        state.editMode.toSave = true;
        state.editMode.updatedId = id;
        state.editMode.inputValue = text;
      }
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, toggleTodo, toggleEditMode } =
  todoSlice.actions;
export default todoSlice.reducer;
