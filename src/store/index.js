function Store(initialState) {
  let state = initialState || [];
  const consumers = [];

  return {
    getState: () => Object.freeze(state),
    subscribe: (consumer) => consumers.push(consumer),
    transform: (effect, data) => {
      const newState = effect(state, data);
      if (newState) {
        state = newState;
        consumers.forEach((consumer) => consumer(newState));
      }
    },
  };
}

export default Store;
