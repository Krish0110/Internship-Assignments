import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../components/Button';
import CounterDisplay from '../components/CounterDisplay';

function CounterPage() {
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
      <CounterDisplay />
      <Button title="Increment" onClick={increment} />
      <Button title="Decrement" onClick={decrement} />
      <Button title="Add by 10" onClick={addBy} />
    </div>
  );
}

export default CounterPage;
