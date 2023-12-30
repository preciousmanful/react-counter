import React, { useState } from 'react';
import './classCounter.css';
const FunctionCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className='counter'>
      <h3>Function Counter</h3>
      <p>Count: {count}</p>
      <div className='buttons'>
          <button onClick={handleIncrease}>Increase Count</button>
          <button onClick={handleDecrease}>Decrease Count</button>
      </div>
    </div>
  );
};

export default FunctionCounter;
