import {list} from '../reducers/list-reducer';
import {app} from '../reducers/app-reducer';
import {createStore, combineReducers} from 'redux';

export const store = createStore(
  combineReducers({list, app}));