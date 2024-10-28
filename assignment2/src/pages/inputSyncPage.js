import React,{useState} from 'react'
import inputSyncApi from './inputSyncApi'
import InputValue from '../components/InputValue/InputValue'
import Button from '../components/Button/Button'
import { MainBoxStyled, SideStyled } from './inputSyncStyled'

const InputSyncPage = () => {
  const [leftValue, setLeftValue] = useState(0)
  const [rightValue, setRightValue] = useState(0)

  const handleLeftSubmit = async () => {
    const data = await inputSyncApi ('/api/update-right-value/', {leftValue: leftValue})
    setRightValue(data.rightValue)
  }

  const handleRightSubmit = async () => {
    const data = await inputSyncApi ('/api/update-left-value/', {rightValue: rightValue})
    setLeftValue(data.leftValue)
  }

  const handleLeftValue = (value) => {
    const valueNum = parseFloat(value)
    setLeftValue(valueNum)
  }

  const handleRightValue = (value) => {
    const valueNum = parseFloat(value)
    setRightValue(valueNum)
  }

  return (
    <MainBoxStyled>
      <SideStyled>
        <p>Left Side</p>
        <InputValue
          value = {leftValue}
          onChange = {(value)=>{handleLeftValue(value)}}
        />
        <Button 
          title = {"Submit"} 
          onClick = {handleLeftSubmit} 
          disabledFlag= {leftValue===0?true:false}
        />
      </SideStyled>

      <SideStyled>
        <p>Right Side</p>
        <InputValue
          value = {rightValue}
          onChange = {(value) => {handleRightValue(value)}}
        />
        <Button 
          title = {"Submit"} 
          onClick = {handleRightSubmit} 
          disabledFlag= {rightValue===0?true:false}
        />
      </SideStyled>
    </MainBoxStyled>
  )
}

export default InputSyncPage