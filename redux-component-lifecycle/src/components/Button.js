import React, { Component } from 'react';

export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.title !== prevState.title) {
      return {
        title: nextProps.title,
      };
    }
    return null;
  }

  render() {
    const { title } = this.state;
    const { onClick } = this.props;
    return (
      <button type="button" onClick={onClick}>
        {title}
      </button>
    );
  }
}

export default Button;
