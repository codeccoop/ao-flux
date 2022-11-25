function ListItem(item) {
  return '<li id="todo-' + item.id + '" class="todo">' + item.text + "</li>";
}

export default ListItem;
