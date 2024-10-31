import React, { Component } from 'react';
import { connect } from 'react-redux';
import ButtonComponent from '../components/Button/Button';
import { fetchTask } from '../redux/action';
import TaskList from '../components/TaskList';

class TaskToDoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayTasks: false,
    };
  }

  handleFetchTasks = async () => {
    const { fetchTasks } = this.props;
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3');
      const data = await response.json();
      fetchTasks(data.map((currentTask) => currentTask.title));
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
    this.setState({ displayTasks: true });
  };

  render() {
    const { tasks } = this.props;
    const { displayTasks } = this.state;
    console.log('tasks stored', tasks);
    return (
      <div>
        <h2>Task To Do</h2>
        <ButtonComponent title="Fetch Task" onClick={this.handleFetchTasks} />
        {displayTasks ? <TaskList tasks={tasks} /> : null}
      </div>
    );
  }
}

// Maps redux state to component props
const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

// Map dispatch to props to bind fetchTask action to dispatch
const mapDispatchToProps = (dispatch) => ({
  fetchTasks: (tasks) => dispatch(fetchTask(tasks)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskToDoPage);
