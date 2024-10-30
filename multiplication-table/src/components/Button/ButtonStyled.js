import styled from 'styled-components';

const ButtonStyled = styled.button`
    background-color: black;
    width: 100px;
    border: solid 2px #ccc;
    color: white;
    padding: 10px;
    cursor: pointer;
    text-align: center;
    border-radius: 10px;
    margin: 5px;

    &:hover{
      background-color: white;
      color: black;
      border: solid 2px #000;
    }

    &:disabled{
    opacity: 0.5;
    }
`;

export default ButtonStyled;
