/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: props.tasks || [],
    };
  }

  render() {
    const { tasks } = this.state;
    console.log('task list');
    return (
      <div>
        <h4>Tasks:</h4>
        <ul>
          {tasks.map((task, index) => (
            <p key={index}>{task}</p>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
