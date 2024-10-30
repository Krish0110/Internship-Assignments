import React, { Component } from 'react';

function withColorHighlight(WrappedComponent) {
  return class ColoredComponent extends Component {
    render() {
      const { result, ...otherProps } = this.props;
      let color;

      if (result % 10 === 0) {
        color = 'red';
      } else if (result % 2 === 0) {
        color = 'green';
      } else {
        color = 'blue';
      }

      return (
        <div>
          <WrappedComponent {...otherProps} result={result} color={color} />
        </div>
      );
    }
  };
}

export default withColorHighlight;
