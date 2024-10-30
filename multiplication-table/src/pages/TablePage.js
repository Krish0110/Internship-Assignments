/* eslint-disable no-console */
import React, { useState } from 'react';
import InputValue from '../components/InputValue';
import Text from '../components/Text';
import Button from '../components/Button';
import multiplier from '../services/multiplier';
import TableRow from '../components/TableRow';
import withColorHighlight from '../services/withColorHighlight';

const ColoredTableRow = withColorHighlight(TableRow);

function TablePage() {
  const [value, setValue] = useState(null);
  const result = multiplier(value);
  const [displayFlag, setDisplayFlag] = useState(false);

  const handleChange = (changedValue) => {
    // added radix parameter 10 to convert it into decimal
    const intValue = parseInt(changedValue, 10);
    setValue(intValue);
  };

  const handleClick = () => {
    if (value && result) {
      setDisplayFlag(true);
    }
  };

  return (
    <div>
      <Text
        text="Multiplication table"
      />
      <InputValue
        value={value}
        onChange={(changedValue) => { handleChange(changedValue); }}
      />
      <Button
        title="Submit"
        onClick={handleClick}
      />
      {displayFlag && (
        <>
          {Array.from({ length: 10 }, (_, i) => (
            <ColoredTableRow key={i} value={value} factor={i + 1} result={result[i]} />
          ))}
        </>
      )}
    </div>
  );
}

export default TablePage;
