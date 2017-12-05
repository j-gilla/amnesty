import React, { PropTypes } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

var getAnswerView = (q, a , i, handleChange, answerLength) => {
  var r = [];
  for( var pname in a){
    var fieldType = getFieldType(q.fields_of_answer, pname);
    var handler = handleChange.bind(null, q, a, i, pname);
    r.push(<td key={'input' + i + pname} style={{
        'height': '34px',
        'textAlign': 'right',
        'border': 'solid 1px #c6c6c6',
      }}>
      { fieldType == 'date' ?
        <DatePicker
          dateFormat="DD MMMM YYYY"
          selected={a[pname]}
          onChange={handler}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          minDate={moment().add(-20, 'years')}
          maxDate={moment()}
        />
          :
        <input style={{
          'textAlign': a.type == 'number' ? 'right' : 'left',
          'fontSize': '15px',
          'fontFamily': 'Helvetica',
          'paddingRight': '7px',
          'width': '100%',
          'height': '100%',
          'border': 'none'
        }} type="text" value={a[pname]} onChange={handler}/>
      }
    </td>);
  }
  return (
    <tr key={'Answer' + i} >
      {
        answerLength > 1 &&
        <td key={'No.' + i} style={{
          'width': '25px',
          'textAlign': 'left'
        }}>{(i + 1) + '. '}&nbsp;</td>
      }
      {r}
    </tr>
  );
}

const getFieldType = (foa, fn) => {
  var type = null;
  foa.every( v => {
    if(v.name == fn){
      type = v.type;
      return false;
    }
    return true;
  })
  return type;
}

const InputTextQuestion = (props) => {
  return (
    <div>
      <form>
        <table style={{'width': '100%'}}>
          <tbody>
          {/* Contain header */}
          {
            props.question.fields_of_answer.length > 1 &&
            <tr style={{
              'textAlign': 'center',
              'fontSize': '16px',
              'height': '40px'
            }}
            >
              {props.question.answers.length > 1 && <td></td>}
              {props.question.fields_of_answer.map(v => <td key={v.name}>{v.label}</td>)}
            </tr>
          }

          {props.question.answers.map((v, i) => getAnswerView(props.question, v, i, props.handleChange, props.question.answers.length))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

InputTextQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
}


export default InputTextQuestion;
