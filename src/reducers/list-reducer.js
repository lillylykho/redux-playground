
import * as ACTIONS from '../constants/list-events';

export function list (state= {items: []}, action) {
  switch (action.type){
    case ACTIONS.ADD_ITEM:
      return {...state, items:[...state.items, action.data.item]}
    case ACTIONS.REMOVE_ITEM:
      const index = state.items.indexOf(action.data.item);
      return {...state, items:[...state.items].splice(index,1)}
    default:
      return state;
  }
}
