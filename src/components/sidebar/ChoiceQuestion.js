import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

var onClick = (props, toggledAnswer) =>{
  var oldAnswers = (props.question.answers || []);
  var newAnswers = null;
  if(props.question.max_answer_num == 1){
    newAnswers = [toggledAnswer];
  } else{
    newAnswers = props.question.options.filter(v =>
      (oldAnswers.indexOf(v) >=0 && v != toggledAnswer) ||
      (oldAnswers.indexOf(v) < 0 && v == toggledAnswer)
    );
  }
  props.handleChange(props.question, newAnswers);
}

var ChoiceQuestion = (props) => {
  if(props.question.options.length <= 7){
    var answers = (props.question.answers || []);
    return (
      <ul className="selection-ctrl">
        {props.question.options.map((v, index) =>
          (<li key={index} className={'option' + (answers.indexOf(v) >= 0 ? ' checked': '')} onClick={onClick.bind(null, props, v)}>
            <div className="opt-container">
              <div className="check-box" style={{'display': (props.question.max_answer_num == 1 ? 'none' : 'inline-block')}}>
                <i className="icon ion-checkmark" />
              </div>
              <div className="opt-text">{v.label}</div>
            </div>
          </li>)
        )}
      </ul>
    )
  }
  return (
    <Select className="ant-select" multi={true} value={props.question.answers} options={props.question.options} onChange={props.handleChange.bind(null, props.question)}
      placeholder="Choose option(s)"
    />
  )
};


export default ChoiceQuestion;
