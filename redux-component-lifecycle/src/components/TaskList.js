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
        Task:
        {tasks}
      </div>
    );
  }
}

export default TaskList;
