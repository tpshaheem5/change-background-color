// import React from 'react'
// import { useReducer } from 'react'
// import "./App.css"
// import Button from 'react-bootstrap/Button';



// const reducer = (state,action)=>{
//   switch (action.type) {
//     case 'change red':
//       return state='red';
//     case 'change blue':
//      return state = 'blue'
//     case 'reset':
//       return state='white'
//      case 'increment':
//       return state = state+1
//      case 'decrement':
//       return state= state-1  
//     default:
//       break;
//   }
// }
// const initialState={
//   color:'white',
//   count:0
// }
// const App = () => {
//   const [state,dispach] =useReducer(reducer,initialState)
//   return (<>
//     <div className='appstyle' style={{backgroundColor:state}} >
//       <h1>Change Background Color Example</h1>
//       <br/>
//     <Button className='bg-danger m-1 border border-none ' onClick={()=>dispach('change red')}>Red</Button>
//     <Button className='bg-primary  border border-none  '  onClick={()=>dispach('change blue')}>Blue</Button>
//     <Button className='bg-success m-1  border border-none '  onClick={()=>dispach('reset')}>reset</Button>
//     <Button className='bg-success m-1  border border-none '  onClick={()=>dispach('increment')}>reset</Button>
//     <Button className='bg-success m-1  border border-none '  onClick={()=>dispach('decrement')}>reset</Button>
//     </div>
//   </>
//   )
// }

// export default App


import React, { useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'change red':
      return { ...state, color: 'red' };
    case 'change blue':
      return { ...state, color: 'blue' };
    case 'reset':
      return { ...state, color: 'white',count:0 };
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const initialState = {
  color: 'white',
  count: 0
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="appStyle" style={{ backgroundColor: state.color }}>
      <h1>Change Background Color Example</h1>
      <br />
     <div>
      <Button className="bg-danger m-3 border border-none" onClick={() => dispatch({ type: 'change red' })}>
        Red
      </Button>
      <Button className="bg-dark border border-none" onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </Button>
      <Button className="bg-primary m-3 border border-none" onClick={() => dispatch({ type: 'change blue' })}>
        Blue
      </Button>
      <div className='d-flex '>
        
      <Button className="bg-secondary m-1 border border-none" onClick={() => dispatch({ type: 'increment' })}>
        Increment
      </Button>
      <h1>{state.count}</h1>
      <Button className="bg-secondary m-1 border border-none" onClick={() => dispatch({ type: 'decrement' })}>
        Decrement
      </Button>
      </div>
      </div> 
    </div>
  );
};

export default App;

