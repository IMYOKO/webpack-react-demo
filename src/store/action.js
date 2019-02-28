export const addAction = () => {
  return {
    type: 'ADD_ACTION'
  }
}

export const clicks = (value) => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: 'ASYNC_ACTION',
      value
    })
  }, 1000);
}