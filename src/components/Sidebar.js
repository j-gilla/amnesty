import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import InputTextQuestion from "./sidebar/InputTextQuestion";
import ChoiceQuestion from "./sidebar/ChoiceQuestion";
import Select from 'react-select';
import '../style/Sidebar.scss';

class Sidebar extends React.Component {
  getAnswerView(){
    switch (this.props.question.type){
      case 'CHOICE':
        return <ChoiceQuestion question={this.props.question} handleChange={this.props.handleSelect}/>
      case 'TEXT_INPUT':
        return <InputTextQuestion question={this.props.question} handleChange={this.props.handleAnswerChange}/>;
    }

  }
  render() {
    const isLastQuestion = this.props.is_last;
    return (
      <div className={'sidebar'}>
        <div className="sb-arrow behind" />
        <div className="ques-container">
          <div className="section sec-question">
            <h1 className="ques-title hidden-xs">{this.props.current_question_index + 1}.&nbsp;{this.props.question.title}</h1>
            <p className="ques-des hidden-xs">{this.props.question.description}</p>
            <h4 className="ques-content" style={{display: this.props.question.content ? 'block': 'none'}}>{this.props.question.content}</h4>
            <div className="answer">
              {this.getAnswerView()}
            </div>
            {this.props.question.unit_info && (<h4 className="ques-content">{this.props.question.unit_info.title}</h4>)}
            {this.props.question.unit_info &&
            (<div className="answer-unit">
              <Select className="ant-select" value={this.props.question.unit_info.selected} options={this.props.question.unit_info.units}
                      onChange={this.props.handleUnitSelect.bind(null, this.props.question)}/>
            </div>
            )}
          </div>
          <div className="section sec-navigation text-center">
            {!this.props.is_fisrt && 
            <button onClick={this.props.prevQ} className="btn btn-default btn-prev">PREVIOUS</button> }
            <button
              onClick={isLastQuestion ? this.props.finish : this.props.nextQ}
              className={"btn btn-primary btn-next"}
              style={ this.props.is_fisrt ? {
                width: "100%",
                marginLeft: "0px"
              } : {} }
            >
              {isLastQuestion ? "FINISH" : "CONTINUE" }
            </button>
          </div>
          <div className="section sec-more-info text-center">
            <p>
              {this.props.children}
            </p>
          </div>
        </div>
        <div className="sb-arrow override" />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    total_number_questions: state.presenter.questions.length,
    question: state.presenter.questions[state.presenter.current_question_index],
    current_question_index: state.presenter.current_question_index,
    is_fisrt: state.presenter.current_question_index == 0,
    is_last: state.presenter.current_question_index == (state.presenter.questions.length -1)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    nextQ: () => {
      dispatch({
        type: 'NEXT_QUESTION'
      });
    },
    prevQ: () => {
      dispatch({
        type: 'PREV_QUESTION'
      });
    },
    finish: () => {
      dispatch({
        type: 'COMPLETE_TASK'
      })
    },
    handleAnswerChange: (q, a, i, propName, e)=>{
      dispatch({
        type: 'UPDATE_ANSWER',
        question_id: q.id,
        answer: a,
        answer_index: i,
        propName,
        newValue: e.target !== undefined ? e.target.value : e
      });
    },
    handleSelect: (q, a) => {
      dispatch({
        type: 'TOGGLE_ANSWER',
        question_id: q.id,
        answers: a,
      });
    },
    handleUnitSelect: (q, newUnit) => {
      dispatch({
        type: 'UPDATE_UNIT',
        question_id: q.id,
        unit: newUnit,
      })
    },
    submitAnswers: () => {
      dispatch({
        type: 'SUBMIT_ANSWERS'
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
