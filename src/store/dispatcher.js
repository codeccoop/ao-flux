function Dispatcher() {
  const actions = {};

  return {
    dispatch: (state, action) => {
      return new Promise((res) => {
        if (actions[action.type]) res(actions[action.type](state, action.payload));
      });
    },
    register: (type, handler) => {
      actions[type] = handler;
    },
  };
}

export default Dispatcher;
