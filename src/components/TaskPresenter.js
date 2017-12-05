import  React, { Component } from 'react';
import {connect} from 'react-redux';

import Sidebar from './Sidebar';
import SidebarFooterLink from './sidebar/SidebarFooterLink';
import DocumentViewer from './DocumentViewer';
import TaskCompleteDialog from './TaskCompleteDialog';

import {changeProject} from '../actions/changeProject';

class TaskPresenter extends React.Component {
  componentWillMount(){
    this.props.changeProject(this.props.location.query.project || this.props.project);
  }
  render() {
    return (
      <div className="container-fluid">
        { !this.props.isFetchingTask &&
          <Sidebar>
            <SidebarFooterLink onClick={this.viewDocument.bind(this)} iconClass="ion-search">
              View entire document
            </SidebarFooterLink>
          </Sidebar>
        }
        { !this.props.isFetchingTask && <DocumentViewer ref={instance => { this.documentViewer = instance; }} file={"./dummyData/shell/s2.pdf"} /> }
        <TaskCompleteDialog
          title="You did it"
          body={"Well done! You just completed a task. That's awesome. You're awesome. Thanks heaps. <br>Wanna do another task? Click below."}
          active={this.props.completed}
          onPrimaryButtonClick={() => {console.log('continue');}}
          onSecondaryButtonClick={() => {console.log('flag');}}
        />
      </div>
    );
  }
  viewDocument() {
    this.documentViewer.getWrappedInstance().popup();
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeProject: (project) => {
      dispatch(changeProject(project));
    }
  }
}


const mapStateToProps = (state) => {
  return {
    project: state.project,
    completed: state.completed,
    isFetchingTask: state.presenter.is_fetching
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskPresenter);
