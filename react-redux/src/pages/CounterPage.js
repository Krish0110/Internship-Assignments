import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import CounterDisplay from '../components/CounterDisplay';

function CounterPage() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: 'INC' });
  };

  const decrement = () => {
    dispatch({ type: 'DEC' });
  };

  const addBy = () => {
    dispatch({ type: 'ADD', payload: 10 });
  };

  return (
    <div>
      <CounterDisplay counter={counter} />
      <Button title="Increment" onClick={increment} />
      <Button title="Decrement" onClick={decrement} />
      <Button title="Add by 10" onClick={addBy} />
    </div>
  );
}

export default CounterPage;
