/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import React from 'react';
import InputStyled from './InputvalueStyled';

const propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

const defaultProps = {
  value: null,
  onChange: () => null,
  onKeyDown: () => null,
};

function InputValue({ value, onChange, onKeyDown }) {
  return (
    <div>
      <InputStyled
        type="number"
        value={value || ''}
        placeholder="Enter a Number"
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

InputValue.propTypes = propTypes;
InputValue.defaultProps = defaultProps;

export default InputValue;
