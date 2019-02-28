import _ from 'lodash';
import { url } from './url'
import './asset/css/index.css';
import Icon from './asset/images/keybox.jpg';
import { cube } from './math.js';
import axios from 'axios'
import printMe from './print'



function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack', 'start', url], ' ');

  element.classList.add('hello');

  var btn = document.createElement('button');

  btn.innerHTML = 'Click me and check the console!';

  btn.onclick = printMe;

  element.appendChild(btn);

  // production  development
  if (process.env.NODE_ENV === 'development') {
    console.log('Looks like we are in development mode!');
  }

  // var myIcon = new Image();
  // myIcon.src = Icon;
  // element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  console.log('object')
}

axios.get('/static/data2.json').then(res=>{
  console.log(res.data)
})