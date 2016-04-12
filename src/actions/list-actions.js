
import * as ACTIONS from '../constants/list-events'

export function addItem(item){
  return {
    type: ACTIONS.ADD_ITEM,
    data: item
  }
}

export function removeItem(item){
  return {
    type: ACTIONS.REMOVE_ITEM,
    data: item
  }
}
