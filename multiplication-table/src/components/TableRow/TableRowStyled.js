import styled from 'styled-components';

const TableRowStyled = styled.div`
  width: 200px;
  padding: 10px 15px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  color: white;
`;

export default TableRowStyled;
