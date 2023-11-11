import { Todos } from "./Todos";
import { store } from "./store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}
