

import { combineReducers, createStore } from 'redux';
import todo from './root-reducer';

const rootReducer = combineReducers({
  todos: todo
});

export const store = createStore(rootReducer)

