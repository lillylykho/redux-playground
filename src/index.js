import {createStore} from 'redux';

const CHANGE_TITLE = 'CHANGE_TITLE';
const REMOVE_TITLE = 'REMOVE_TITLE ';

// action creator
function changeTitle (newTitle){
  return {
    type:CHANGE_TITLE,
    payload: newTitle
  }
}

function removeTitle (){
  return {
    type:REMOVE_TITLE
  }
}

const initialState = {title: "Hello Redux"};

// reducer
function appReducer (state=initialState, action){
  switch (action.type) {
    case CHANGE_TITLE:
      return {...state, title: action.payload};
    case REMOVE_TITLE:
      return {...state, title: ''};
    default:
      return state;
  }
}

const store = createStore(appReducer);

// UI
const btn = document.getElementsByTagName('button')[0];
const title = document.getElementsByTagName('h1')[0];

btn.addEventListener('click', ()=> store.dispatch(removeTitle()));

store.subscribe( ()=> title.innerHTML = store.getState().title);







