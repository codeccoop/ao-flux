import List from "./List";

function Todos(todos) {
  return (
    "<h1>TODO List</h1>" +
    '<label id="newTaskLabel">Add a task</label><br/>' +
    '<input id="input" aria-labeledby="newTaskLabel" type="text" />' +
    "<hr>" +
    List(todos)
  );
}

export default Todos;
