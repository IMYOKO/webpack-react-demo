import Mock from 'mockjs';

Mock.mock('/api/login', 'post', (options)=>{
  const {name, password} = JSON.parse(options.body)
  if (name && password) {
    return "login success"
  } else {
    return 'login error'
  }
});