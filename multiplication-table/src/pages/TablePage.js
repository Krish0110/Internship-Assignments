/* eslint-disable no-console */
import React, { useState } from 'react';
import InputValue from '../components/InputValue/InputValue';
import Text from '../components/Text/Text';
import Button from '../components/Button/Button';
import multiplier from '../services/multiplier';
import TableRow from '../components/TableRow/TableRow';
import withColorHighlight from '../services/withColorHighlight';
import { MainBoxStyled, TableStyled } from './TablePaageStyled';

const ColoredTableRow = withColorHighlight(TableRow);

function TablePage() {
  const [value, setValue] = useState(null);
  const result = multiplier(value);
  const [displayFlag, setDisplayFlag] = useState(false);

  const handleChange = (changedValue) => {
    // added radix parameter 10 to convert it into decimal
    const intValue = parseInt(changedValue, 10);
    setValue(intValue);
    setDisplayFlag(false);
  };

  const handleClick = () => {
    if (value && result) {
      setDisplayFlag(true);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <MainBoxStyled>
      <Text
        text="Multiplication table"
      />
      <InputValue
        value={value}
        onChange={(changedValue) => { handleChange(changedValue); }}
        onKeyDown={handleKeyDown}
      />
      <Button
        title="Submit"
        onClick={handleClick}
      />
      {displayFlag && (
        <TableStyled>
          {Array.from({ length: 10 }, (_, i) => (
            <ColoredTableRow key={i} value={value} factor={i + 1} result={result[i]} />
          ))}
        </TableStyled>
      )}
    </MainBoxStyled>
  );
}

export default TablePage;
