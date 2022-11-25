import ListItem from "./ListItem";

function List(items) {
  return "<ol class='list'>" + items.map(ListItem) + "</ol>";
}

export default List;
