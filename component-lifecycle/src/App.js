/* eslint-disable max-len */
/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React, { Component } from 'react';
import Counter from './components/Counter';

export default class App extends Component {
  constructor(props) {
    console.log('Parent Constructor');
    super(props);
    this.state = {
      parentCounter: 20,
      showChild: true,
    };

    this.toggleChild = this.toggleChild.bind(this);
    debugger;
    this.updateParentCounter = this.updateParentCounter.bind(this);
  }

  toggleChild() {
    const { showChild } = this.state;
    this.setState({ showChild: !showChild });
  }

  updateParentCounter(newCounterVaue) {
    this.setState({ parentCounter: newCounterVaue });
  }

  render() {
    const { showChild } = this.state;
    const { parentCounter } = this.state;
    console.log('Parent Renderer');
    debugger;
    return (
      <div>
        <h1>Parent Counter</h1>
        <button type="button" onClick={this.toggleChild}>{showChild ? 'Hide Child' : 'Show Child'}</button>
        {showChild && (<Counter parentCounter={parentCounter} updateCounter={this.updateParentCounter} />)}
      </div>
    );
  }
}
