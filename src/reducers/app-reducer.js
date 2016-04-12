
import * as ACTIONS from '../constants/app-events';

export function app (state={title:'My app'}, action) {
  switch (action.type){
    case ACTIONS.CHANGE_TITLE:
      return {...state, title: action.data};
    default:
      return state;
  }
}
