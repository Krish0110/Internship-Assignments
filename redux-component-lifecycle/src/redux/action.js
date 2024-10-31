export const FETCH_TASKS = 'FETCH_TASKS';

export const fetchTask = (tasks) => ({
  type: FETCH_TASKS,
  payload: tasks,
});
