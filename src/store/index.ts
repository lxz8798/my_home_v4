const store = {
  state: {
    count: 0
  },
  actions: {},
  asyncActions: {},
  actionNames: {}
}

let actionNames: { [key: string]: string } = {};
for(let key in store.actions) {
  actionNames[key] = key
}
store.actionNames = actionNames

export default store