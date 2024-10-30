/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyled from './ButtonStyled';

const propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  title: null,
  onClick: () => null,
};

function Button({ title, onClick }) {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      {title}
    </ButtonStyled>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
