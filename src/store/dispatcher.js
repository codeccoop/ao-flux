function Dispatcher() {
  this.store = null;
  this.actions = {};

  return {
    dispatch: (action) => {
      if (!this.store) throw new Error("You have to bound a store to the dispatcher");
      const actionEffect = this.actions[action.type];
      if (actionEffect) {
        this.store.transform(actionEffect, action.payload);
      }
    },
    register: (type, effect) => {
      this.actions[type] = effect;
    },
    linkStore: (store) => {
      this.store = store;
    },
  };
}

export default Dispatcher;
