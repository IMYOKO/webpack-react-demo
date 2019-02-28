import React, { useState } from 'react';

// class About02 extends Component {
//   render() {
//     return (
//       <div className="About02">
//         这是About02
//       </div>
//     );
//   }
// }

function About02 (props) {
  const { title } = props;
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState('yoko');
  return (
    <div className="About02">
      这是About02 次数{count}

      <p>{title}</p>
      <p>{userName}</p>
      <button onClick={()=>{setCount(count + 1)}}>点击</button>
      <button onClick={()=>{setUserName('YOKO')}}>点击</button>
    </div>
  );
}

export default About02;