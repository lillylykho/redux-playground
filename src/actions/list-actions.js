
import {ADD_ITEM} from '../constants/list-events'

export function addItem(item){
  return {
    type: ADD_ITEM,
    data: item
  }
}
