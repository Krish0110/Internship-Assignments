/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import taskReducer from './reducer';

const store = createStore(taskReducer, applyMiddleware(thunk));

console.log('This is store', store);

export default store;
