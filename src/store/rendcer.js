const inintState = 'initdata'
const addActions = (state = inintState, action) => {
  switch (action.type) {
    case 'ADD_ACTION':
      console.log('yoko')
      return 'yoko click action'
    default:
      return state
  }
}

export default addActions