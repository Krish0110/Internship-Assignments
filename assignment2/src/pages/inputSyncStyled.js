import styled from 'styled-components'

const MainBoxStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding:20px;
  background-color: black;
  flex-shrink: 0;
  height: 100vh;
  align-items: center;
`

const SideStyled =styled.div`
  margin: auto;
  width: 25%;
  height: 25%;
  background-color: pink;
  display: grid;
  place-items: center;

`

export {MainBoxStyled, SideStyled}