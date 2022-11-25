import List from "./List";

function Todos(todos) {
  return "<h1>TODO List</h1>" + '<input id="input" type="text" />' + "<hr>" + List(todos);
}

export default Todos;
