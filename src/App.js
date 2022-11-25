import Todos from "./components/Todos";

function App({ el, store }) {
  function addTask(ev) {
    const value = ev.target.value;
    if (value) {
      store.dispatch({
        type: "ADD_TODO",
        payload: value,
      });
    }
  }

  function dropTask(ev) {
    const el = ev.currentTarget;
    const index = Array.from(el.parentElement.children).indexOf(el);
    store.dispatch({
      type: "DROP_TODO",
      payload: index,
    });
  }

  function render(todos) {
    el.innerHTML = Todos(todos);
    document.getElementById("input").addEventListener("change", addTask);
    Array.from(document.getElementsByClassName("todo")).forEach((todo) =>
      todo.addEventListener("click", dropTask)
    );
  }

  store.subscribe(render);

  return () => render(store.getState());
}

export default App;
