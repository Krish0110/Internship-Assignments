/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ButtonComponent from '../components/Button/Button';
import fetchTask from '../redux/action';
// import TaskList from '../components/TaskList';

class TaskToDoPage extends Component {
  constructor(props) {
    super(props);

    this.handleFetchTask = this.handleFetchTask.bind(this);
  }

  handleFetchTask() {
    this.props.fetchTask();
    console.log('Habdling fetched Data');
  }

  render() {
    const { tasks } = this.props;
    console.log(tasks);
    return (
      <div>
        <h2>Task To Do</h2>
        <ButtonComponent title="Fetch Task" onClick={this.handleFetchTask} />
        <div>
          {tasks.length > 0 ? tasks.map((task, index) => <div key={index}>{task}</div>) : 'No tasks available'}
        </div>
      </div>
    );
  }
}

// Maps redux state to component props
const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

// Map dispatch to props to bind fetchTask action to dispatch
const mapDispatchToProps = {
  fetchTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskToDoPage);
