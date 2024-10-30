/* eslint-disable default-param-last */
const initialState = {
  task: [],
};

const taskReducer = (state = initialState, action) => {
  console.log('Reducer', state);
  switch (action.type) {
    case 'FETCH_TASK':
      return {
        ...state,
        task: [...state.task, ...action.payload],
      };
    default:
      return state;
  }
};

export default taskReducer;
