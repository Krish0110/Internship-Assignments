const fetchTask = () => async (dispatch) => {
  console.log('Fetching the task');
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3');
    const task = await res.json();
    dispatch({ type: 'FETCH_TASK', payload: task.map((currentTask) => currentTask.title) });
    console.log(task);
  } catch (error) {
    console.log(error);
  }
};

export default fetchTask;
