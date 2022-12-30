import App from "./App";
import Store from "./store";
import Dispatcher from "./store/dispatcher";
import actions from "./actions";
import todos from "./data/todos";

const store = new Store(todos);
const dispatcher = new Dispatcher();

for (let action in actions) {
  dispatcher.register(action, actions[action]);
}

dispatcher.linkStore(store);

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("app");
  const app = App({ el, store, dispatcher });
  app();
});
