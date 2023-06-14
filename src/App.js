import React from 'react'
import { useReducer } from 'react'
import "./App.css"
import Button from 'react-bootstrap/Button';



const reducer = (state,action)=>{
  switch (action) {
    case 'change red':
      return state='red';
    case 'change blue':
     return state = 'blue'
    case 'reset':
      return state='white'
    default:
      break;
  }
}

const App = () => {
  const [color,dispach] =useReducer(reducer,'white')
  return (<>
    <div className='appstyle' style={{backgroundColor:color}} >
      <h1>Change Background Color Example</h1>
      <br/>
    <Button className='bg-danger m-1 border border-none ' onClick={()=>dispach('change red')}>Red</Button>
    <Button className='bg-primary  border border-none  '  onClick={()=>dispach('change blue')}>Blue</Button>
    <Button className='bg-success m-1  border border-none '  onClick={()=>dispach('reset')}>reset</Button>
    </div>
  </>
  )
}

export default App


// import React from 'react';
// import { useReducer } from 'react';
// import './App.css';

// const reducer = (state, action) => {
//   switch (action) {
//     case 'change red':
//       return 'red';
//     case 'change blue':
//       return 'blue';
//     case 'reset':
//       return 'black';
//     default:
//       return state;
//   }
// };

// const App = () => {
//   const [color, dispatch] = useReducer(reducer, 'black');

//   return (
//     <div style={{ width: '200px', height: '200px', backgroundColor: color }}>
//       <h1>Change Background Color</h1>
//       <button onClick={() => dispatch('change red')}>Red</button>
//       <button onClick={() => dispatch('change blue')}>Blue</button>
//       <button onClick={() => dispatch('reset')}>Reset</button>
//     </div>
//   );
// };

// export default App;
