import { store } from "./app/store";
import { Counter } from "./components/Counter";
import { Provider } from "react-redux";
export function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello</h1>
        <Counter />
      </div>
    </Provider>
  );
}
