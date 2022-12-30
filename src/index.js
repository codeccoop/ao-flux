import App from "./App";
import Store from "./store";
import actions from "./actions";
import todos from "./data/todos";

const store = Store(todos);

for (let action in actions) {
  store.registerAction(action, actions[action]);
}

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("app");
  const app = App({ el, store });
  app();
});
