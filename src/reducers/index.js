

import {combineReducers} from 'redux';

import presenter from './presenter';
import user from './user'
import {reducer as formReducer} from 'redux-form';
import countryList from './metadata/countries';

const completed = (state = false, action) => {
  switch(action.type){
    case 'COMPLETE_TASK':
      return true;
    default:
      return state;
  }
}
const metadata = () => {
  return {countryList};
}
const project = (state = 'cause', action) => {
  switch (action.type){
    case 'CHANGE_PROJECT':
      return action.project;
    default:
      return state
  }
}

export default combineReducers({
  project,
  user,
  presenter,
  completed,
  metadata,
  form: formReducer
});