
const inistate= [
  { lang: 'zh', key: 'zh', title: '标题1', content: [ 
    {id: 'zh_0', type: 'text01zh', content: '111'},
    {id: 'zh_1', type: 'text02zh', content: '2222'}
  ] },
  { lang: 'en', key: 'en', title: '标题2', content: [ 
    {id: 'en_0', type: 'text01en', content: '111'},
    {id: 'en_1', type: 'text02en', content: '2222'}
  ] }
]
export const steps = (state = inistate, action) => {
  switch (action.type) {
    case 'SETSTEPS':
      state = action.value
      return state
    case 'ADDSTEPS':
      var data = [...state]
      if (action.key === 'zh') {
        let news = {id: 'zh_' + data[0].content.length, type: 'text', content: '111'}
        data[0].content = [...data[0].content, news]
      } else {
        let news = {id: 'en_' + data[1].content.length, type: 'text', content: '2222'}
        data[1].content = [...data[1].content, news]
      }
      console.log(data);
      return data
    case 'DELSTEPS':
      var data = [...state]
      if (action.key === 'zh') {
        data[0].content.splice(action.index, 1);
      } else {
        data[1].content.splice(action.index, 1);
      }
      return data
    default:
      return state
  }
}

export const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADDTODO':
      let a = [...state, action.value]
      return a
      // return [
      //   ...state,
      //   action.value
      // ]
    default:
      return state
  }
}