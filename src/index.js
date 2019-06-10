import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const Count = () => {
  /*
    useReducer needs two arguments.
    The first is a reducer function, the second is the initial state.
    It returns an array of two elements.
    The first is the current state, the second is a dispatch function.
  */
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case 'INC':
        return state + 1;
      case 'DEC':
        return state - 1;
      default:
        return state;
    }
  }, 0);
  return (
    <>
      <div>{count}</div>
      <button
        onClick={() => {
          dispatch('INC');
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch('DEC');
        }}
      >
        Decrement
      </button>
    </>
  );
};

ReactDOM.render(<Count />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
