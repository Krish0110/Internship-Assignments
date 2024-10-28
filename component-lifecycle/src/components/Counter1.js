/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-debugger */
import React, { Component } from 'react';

export default class Counter1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    debugger;
  }

  componentDidMount() {
    console.log('Inside Component did mount of Child2');
    debugger;
    setTimeout(() => {
      this.setState(
        { counter: 15 },
      );
    }, 1000);
    debugger;
  }

  shouldComponentUpdate(nextProps, nextState) {
    debugger;
    const { counter } = this.state;
    if (counter !== nextState.counter) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    debugger;
    console.log('Component at Child 2 Updated');
    console.log(`Previous props Value:${prevProps}`);
    console.log(`Previous State Value:${prevState}`);
    console.log('Snapshot', snapshot);
  }

  componentWillUnmount() {
    debugger;
    console.log('Component Unmount of Child 2');
  }

  handleIncrement() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
    console.log('Increasing');
  }

  handleDecrement() {
    const { counter } = this.state;
    this.setState({ counter: counter - 1 });
    console.log('Decreasing');
  }

  render() {
    const { counter } = this.state;
    console.log('Child 2 Renderer');
    debugger;
    return (
      <div>
        <h2>Child 2 Counter</h2>
        <div>
          Counter 2: {counter}
        </div>

        <button type="button" onClick={this.handleIncrement}>
          Increment
        </button>

        <button type="button" onClick={this.handleDecrement}>
          Decrement
        </button>
      </div>
    );
  }
}
