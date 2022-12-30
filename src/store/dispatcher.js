function Dispatcher() {
  const actions = {};

  return {
    dispatch: (state, action) => {
      if (actions[action.type]) return actions[action.type](state, action.payload));
      else return state;
    },
    register: (type, handler) => {
      actions[type] = handler;
    },
  };
}

export default Dispatcher;
