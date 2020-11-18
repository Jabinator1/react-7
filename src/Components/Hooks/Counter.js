import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(()=> {
    console.log('this is a componentDidMount')
  },[])

  useEffect(()=> {
    console.log('this is a componentDidUpdate')
  },[count])

  const addCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addCount}>Add 1</button>
      <button onClick={minusCount}>Subtract 1</button>
    </div>
  );
};

export default Counter;
