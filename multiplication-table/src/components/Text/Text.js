import React from 'react';
import TextStyled from './TextStyled';

function Text({ text }) {
  return (
    <TextStyled>
      <h2>{text}</h2>
    </TextStyled>
  );
}

export default Text;
