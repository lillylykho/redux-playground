import {list} from '../reducers/list-reducer';
import {createStore} from 'redux';

const state = {
  title: 'My First Redux App!',
  items:[]
};

export const store = createStore(list, state);