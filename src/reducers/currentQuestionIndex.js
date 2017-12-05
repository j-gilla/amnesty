
import {CHANGE_PROJECT } from '../actions/changeProject';
const currentQuestionIndex = (state = 0, action) => {
  switch (action.type) {
    case 'PREV_QUESTION':
      return (state > 0) ? state - 1 : state;
    case 'NEXT_QUESTION':
      return state + 1;
    case CHANGE_PROJECT:
      return 0;
    default:
      return state;
  }
}
export default currentQuestionIndex;