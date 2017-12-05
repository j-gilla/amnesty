
import {RECEIVE_TASK} from '../actions';
import shell1 from './task-data/shell-1';
import shell2 from './task-data/shell-2';
import shell3 from './task-data/shell-3';
import shell4 from './task-data/shell-4';
import shell5 from './task-data/shell-5';
import shell6 from './task-data/shell-6';
import shell7 from './task-data/shell-7';
import shell8 from './task-data/shell-8';
import shell9 from './task-data/shell-9';
import eni1 from './task-data/eni-1';
import eni2 from './task-data/eni-2';
import eni3 from './task-data/eni-3';
import eni4 from './task-data/eni-4';

const templates = {
  shell1, shell2, shell3, shell4, shell5, shell6, shell7, shell8, shell9, eni1, eni2, eni3, eni4
};

var convertQuestion = (questions) => {
  return questions.map((q, i) => {
    (q.type == 'TEXT_INPUT') && (q.id = ++i, q.answers = generateAnswers(q));
    return q;
  });
}

var generateAnswers = (q) => {
  var answers = q.answers ? q.answers.slice(0) : [];
  var maxAnswerNum = q.max_answer_num || (1);
  for(var i = 0; i < maxAnswerNum; i++){
    if(!answers[i]){
      answers[i] = getAnswerProp(q);
    }else{
      answers[i] = Object.assign({}, answers[i]);
    }
  }
  return answers;
};

var getAnswerProp = (q) => {
  var foa = q.fields_of_answer;
  var o = {};
  if(foa && foa.length > 0){
    foa.forEach(v => {
      o[v.name] = '';

    })
  }else{
    o.value = '';
  }
  return o;
};

const updateQuestion = (state, action) => {
  switch (action.type){
    case 'UPDATE_ANSWER':
      if(action.question_id == state.id){
        var answers = state.answers.slice();
        var newAnswer = Object.assign({}, action.answer);
        newAnswer[action.propName] = action.newValue;

        answers.splice(action.answer_index, 1, newAnswer);
        return Object.assign({}, state, {answers: answers});
      }
      return state;
    case 'TOGGLE_ANSWER':
      if(action.question_id == state.id){
        // var options = state.options.map(v => Object.assign({}, v, {checked: action.answers.indexOf(v) >= 0}));
        return Object.assign({}, state, {answers: action.answers});
      }
      return state;
    default:
      return state;
  }
}

const getQuestionList = (templateId, projectType) => {
  var r = templates[templateId.split("-").join("")];
  if (!r) {
    return [];
  }
  return convertQuestion(r.filter(q => {
    return q.project == projectType;
  }));
}

const updateQuestionUnit = (q, unit) => {
  return Object.assign({}, q, {
    unit_info : {
      selected: unit,
      units: q.unit_info.units
    }
  })
}

const questions = (state = [], action) => {
  switch(action.type){
    case 'UPDATE_ANSWER':
      return state.map(q => updateQuestion(q, action));
    case 'TOGGLE_ANSWER':
      return state.map(q => updateQuestion(q, action));
    case 'UPDATE_UNIT':
      return state.map(q => {
        if(q.id == action.question_id) return updateQuestionUnit(q, action.unit);
        return q;
      })
    case RECEIVE_TASK:
      return getQuestionList(action.templateId, action.projectType);
    default:
      return state;
  }
}
export default questions;
