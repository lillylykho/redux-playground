import {list} from '../reducers/list-reducer';
import {app} from '../reducers/app-reducer';
import {createStore, applyMiddleware, combineReducers} from 'redux';

// middleware
export const logger = state => next => action => {
  console.log(action);
  console.log(state);
  return next(action)
};

export const store = createStore(
  combineReducers({list, app}),
  applyMiddleware(logger)
);