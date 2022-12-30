const actions = {
  "ADD_TODO": function (state, todo) {
    return state.concat({ id: state.length, text: todo });
  },
  "DROP_TODO": function (state, index) {
    return state.slice(0, index).concat(state.slice(index + 1, state.length));
  },
};

export default actions;
