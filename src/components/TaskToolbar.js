import React from 'react';
import { connect } from 'react-redux';
import helpRoundBtn from '../images/help-round-button.svg';
import iconMenuBlack from '../images/ico-menu-white.svg';
import '../style/TaskToolbar.scss';

class TaskToolbar extends React.Component {
  render() {
    return (
      <div className="container-fluid task-toolbar">
        <div className="icon progress-trophy hidden-xs">
          <i className="icon ion-arrow-up-a"></i>
          <span>&nbsp;{this.props.trophy}&nbsp;</span>
          <div className="trophy-group">
            <div className="trophy text-center">
            </div><span>&nbsp;&nbsp;<i className="icon ion-trophy"></i></span>
            </div>
        </div>
        <div className="xs-menu show-xs hidden-sm hidden-md hidden-lg">
          <a href="#">
            <img src={iconMenuBlack} />
          </a>
        </div>
        <div className="progress-status text-center">
          <span>
            {this.props.question && (this.props.question.header)}
          </span>
        </div>
        <div className="progress-help">
          <ul>
            <li className="flag hidden-xs">
              <a href="#"><i className="icon ion-ios-flag" /><span>&nbsp;FLAG</span></a>
            </li>
            <li className="help">
              <a href="#">
                <i className="icon ion-help-circled hidden-xs" />
                <img className="xs-icon-help hidden-sm hidden-md hidden-lg" src={helpRoundBtn} />
                <span className="hidden-xs">&nbsp;HELP</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trophy: state.user.trophy,
    question: state.presenter.questions[state.presenter.current_question_index],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    nextQ: () => {
      dispatch({
        type: 'NEXT_QUESTION'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskToolbar);
