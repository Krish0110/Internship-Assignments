import React from 'react';

function InputValue({ value, onChange }) {
  return (
    <div>
      <input
        type="number"
        value={value || ''}
        placeholder="Enter a Number"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default InputValue;
