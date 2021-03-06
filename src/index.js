import React, { useReducer, useRef } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// const Count = () => {
//   /*
//     useReducer needs two arguments.
//     The first is a reducer function, the second is the initial state.
//     It returns an array of two elements.
//     The first is the current state, the second is a dispatch function.
//   */
//   const [count, dispatch] = useReducer((state, action) => {
//     switch (action) {
//       case 'INC':
//         return state + 1;
//       case 'DEC':
//         return state - 1;
//       default:
//         return state;
//     }
//   }, 0);
//   return (
//     <>
//       <div>{count}</div>
//       <button
//         onClick={() => {
//           dispatch('INC');
//         }}
//       >
//         Increment
//       </button>
//       <button
//         onClick={() => {
//           dispatch('DEC');
//         }}
//       >
//         Decrement
//       </button>
//     </>
//   );
// };

const ShoppingList = () => {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'ADD': {
        return [...state, { id: state.length, name: action.name }];
      }
      case 'REMOVE': {
        return state.filter((_, index) => index !== action.index);
      }
      case 'CLEAR': {
        return [];
      }
      default:
        return state;
    }
  }, []);

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch({
      type: 'ADD',
      name: inputRef.current.value, // inputRef.current refers to the DOM node
    });
    inputRef.current.value = '';
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <button onClick={() => dispatch({ type: 'CLEAR' })}>Clear List</button>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={item.id}>
              {item.name}{' '}
              <button
                onClick={() => {
                  dispatch({ type: 'REMOVE', index });
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

ReactDOM.render(<ShoppingList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
