import React, { useState } from 'react';  

// function countInitial() {
//   return 4;
// }

function App() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState('blue');

  function decrementCount() {
    setCount(prevCount => prevCount - 1);
    setTheme('blue');
  }
  function incrementCount() {
    setCount(prevCount => prevCount + 1);
    setTheme('red');
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span color={theme}>{count}</span>
      {/* <span>{theme}</span> */}
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App;
