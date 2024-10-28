/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-debugger */
import React, { Component } from 'react';
import Counter1 from './Counter1';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childCounter: 0,
      storeCount: 0,
      loadParentCounterValue: false,
      backToChildValue: false,
      workingWithParent: false,
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.toggleParent = this.toggleParent.bind(this);
    this.toggleChild = this.toggleChild.bind(this);
    console.log('Child Constructor');
    debugger;
  }

  // getDerivedStateFromProps is called before render
  static getDerivedStateFromProps(props, state) {
    debugger;
    console.log(`State before updating from props:${state}`);
    console.log(state.loadParentCounterValue);
    console.log(state.childCounter);
    console.log(props.parentCounter);
    console.log(state.storeCount);
    if (props.parentCounter && state.loadParentCounterValue) {
      console.log('Loading parent value in the counter');
      return {
        storeCount: state.childCounter,
        childCounter: props.parentCounter,
        loadParentCounterValue: false,
      };
    }
    if (state.storeCount > 0 && state.backToChildValue) {
      console.log('Child value is being loaded back');
      const { updateCounter } = props;
      updateCounter(state.childCounter);
      return {
        childCounter: state.storeCount,
        storeCount: 0,
        backToChildValue: false,
      };
    }

    // if (props.parentCounter
    //   && state.loadParentCounterValue) {
    //   console.log('Parent value is loaded');
    //   debugger;
    //   return { childCounter: props.parentCounter };
    // }
    return null;
  }

  componentDidMount() {
    console.log('Inside Component did mount of Child');
    debugger;
    setTimeout(() => {
      this.setState(
        {
          childCounter: 10,
        },
      );
    }, 1000);
    debugger;
  }

  shouldComponentUpdate(nextProps, nextState) {
    debugger;
    const { childCounter } = this.state;
    if (childCounter !== nextState.childCounter) {
      return true;
    }
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Inside get snapshot of Child');
    console.log(`Previous State: ${prevState}`);
    return prevState;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    debugger;
    console.log('Component at Child Updated');
    console.log(`Previous props Value:${prevProps}`);
    console.log(`Previous State Value:${prevState}`);
    console.log('Snapshot', snapshot);
  }

  componentWillUnmount() {
    debugger;
    console.log('Component Unmount of Child');
  }

  handleIncrement() {
    const { childCounter } = this.state;
    this.setState({ childCounter: childCounter + 1 });
    console.log('Increasing');
  }

  handleDecrement() {
    const { childCounter } = this.state;
    this.setState({ childCounter: childCounter - 1 });
    console.log('Decreasing');
  }

  toggleParent() {
    this.setState({ loadParentCounterValue: true, workingWithParent: true });

    console.log('Loading parent');
  }

  toggleChild() {
    this.setState({ backToChildValue: true, workingWithParent: false });
    console.log('Loading back child value');
  }

  render() {
    const { childCounter } = this.state;
    const { workingWithParent } = this.state;
    console.log('Child Renderer');
    debugger;
    return (
      <div>
        <h2>Child Counter</h2>
        <div>
          Counter: {childCounter}
        </div>

        <button type="button" onClick={this.handleIncrement}>
          Increment
        </button>

        <button type="button" onClick={this.handleDecrement}>
          Decrement
        </button>

        <button type="button" onClick={workingWithParent ? this.toggleChild : this.toggleParent}>
          {workingWithParent ? 'Load Chlid Data' : 'Load Parent Data'}
        </button>
        <Counter1 />
      </div>
    );
  }
}
