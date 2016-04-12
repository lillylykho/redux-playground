
import {store} from 'store/store';
import * as listActions from 'actions/list-actions';

console.log(store.getState());

const item = {item: 'item'}

store.dispatch(listActions.addItem(item));

console.log(store.getState());

store.dispatch(listActions.removeItem(item));

console.log(store.getState());