import React from 'react'
import PropTypes from 'prop-types'
import InputStyled from './InputValueStyled'

const propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}

const defaultProps = {
  value: 0,
  onChange: () => null
}

const InputValue = ({value, onChange}) => {

  return (
    <div>
      <InputStyled
        type = "number" 
        step = "0.01"
        value = {value} 
        placeholder = 'Enter a number' 
        onChange = {(e) => onChange(e.target.value) }
     />
    </div>
  )
}

InputValue.propTypes = propTypes
InputValue.defaultProps = defaultProps

export default InputValue