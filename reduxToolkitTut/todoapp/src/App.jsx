import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="flex flex-col justify-center items-center">
      <TodoForm />
      <div>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} className={"mt-4"} />;
        })}
      </div>
    </div>
  );
}

export default App;
