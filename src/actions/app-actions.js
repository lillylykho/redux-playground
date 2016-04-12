
import * as ACTIONS from '../constants/app-events'

export function changeTitle(value){
  return {
    type: ACTIONS.CHANGE_TITLE,
    data: value
  }
}

