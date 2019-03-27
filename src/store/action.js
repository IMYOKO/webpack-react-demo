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

export const setSteps = (value) => {
  return {
    type: 'SETSTEPS',
    value
  }
}

export const addSteps = (key) => {
  return {
    type: 'ADDSTEPS',
    key
  }
}

export const delSteps = (key, index) => {
  return {
    type: 'DELSTEPS',
    key,
    index
  }
}

export const addTodo = value => {
  return {
    type: 'ADDTODO',
    value
  }
}