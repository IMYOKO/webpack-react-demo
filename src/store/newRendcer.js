const asyFn = (state = {asyncText: 'init'}, action) => {
  switch(action.type ){
    case 'ASYNC_ACTION':
      return {
        ...state,
        asyncText: action.value
      }
    default:
      return state;
  }
}

export default asyFn