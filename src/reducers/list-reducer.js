
import {ADD_ITEM} from '../constants/list-events';

export function list (state, action) {
  switch (action.type){
    case ADD_ITEM:
      return {...state, items:[...state.items, action.data]}
    default:
      return state;
  }
}
