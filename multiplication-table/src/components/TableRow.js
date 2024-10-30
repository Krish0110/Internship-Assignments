import React from 'react';

function TableRow({ value, factor, result }) {
  return (
    <div>
      {value}
      {' '}
      *
      {factor}
      {' '}
      =
      {result}
    </div>
  );
}

export default TableRow;
