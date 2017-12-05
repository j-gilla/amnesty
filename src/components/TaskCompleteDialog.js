import React from 'react';
import '../style/TaskCompleteDialog.scss';

class TaskCompleteDialog extends React.Component {
  render() {
    return (
      <div className={"dialog-container" + (this.props.active ? " show" : "")}>
        <div className="dialog-body" >
          <div className="dialog-icon">
            <i className="icon ion-trophy"></i>
          </div>
          <h2 className="dialog-title">
            {this.props.title}
          </h2>
          <p className="dialog-content" dangerouslySetInnerHTML={{__html: this.props.body}}></p>
          <button className="btn btn-primary primary" onClick={this.props.onPrimaryButtonClick}>Continue</button>
          <button className="btn btn-default no-border" onClick={this.props.onSecondaryButtonClick}>
            <i className="icon ion-flag"></i> Flag
          </button>
        </div>
        <div className="dialog-backdrop"></div>
      </div>
    )
  }
}

export default TaskCompleteDialog;
