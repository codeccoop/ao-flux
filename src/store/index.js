import Dispatcher from "./dispatcher";

function Store(initialState) {
  let state = initialState || [];
  const dispatcher = new Dispatcher();
  const consumers = [];

  return {
    getState: () => Object.freeze(state),
    registerAction: (type, handler) => dispatcher.register(type, handler),
    subscribe: (consumer) => consumers.push(consumer),
    dispatch: (action) =>
      dispatcher.dispatch(state, action).then((newState) => {
        if (newState) {
          state = newState;
          consumers.forEach((consumer) => consumer(newState));
        }
      }),
  };
}

export default Store;
