import PropTypes from 'prop-types';
import React from 'react';
import TableRowStyled from './TableRowStyled';

const propTypes = {
  value: PropTypes.number,
  factor: PropTypes.number,
  result: PropTypes.number,
  color: PropTypes.string,
};

const defaultProps = {
  value: null,
  factor: null,
  result: null,
  color: null,
};

function TableRow({
  value, factor, result, color,
}) {
  return (
    <TableRowStyled color={color}>
      {value}
      {' '}
      *
      {factor}
      {' '}
      =
      {result}
    </TableRowStyled>
  );
}

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

export default TableRow;
