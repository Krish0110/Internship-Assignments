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
        {tasks}
      </div>
    );
  }
}

export default TaskList;
