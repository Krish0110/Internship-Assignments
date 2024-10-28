import React from 'react'
import PropTypes from 'prop-types'
import ButtonStyled from './ButtonStyled'

const propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabledFlag: PropTypes.bool
}

const defaultProps = {
  title: null,
  onClick: () => null,
  disabledFlag: true
}

const Button = ({title, onClick,disabledFlag}) => {
  return (
    <ButtonStyled onClick = {onClick} disabled = {disabledFlag}>
        {title}
    </ButtonStyled>

  )
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button