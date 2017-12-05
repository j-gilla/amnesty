
import {combineReducers} from 'redux';
import questions from './questions';
import currentQuestionIndex from  './currentQuestionIndex';
import {RECEIVE_TASK} from '../actions';

const isFetching = (state = true, action) => {
  switch (action.type){
    case RECEIVE_TASK:
      return false;
    default:
      return state;
  }
}
const presenter = combineReducers({
  current_question_index: currentQuestionIndex,
  questions,
  is_fetching: isFetching,
});
export default presenter;
