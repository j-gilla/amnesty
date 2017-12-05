

import axios from 'axios';

export const REQUEST_TASK = 'REQUEST_TASK';
function requestTask() {
  return {
    type: REQUEST_TASK
  }
}

export const RECEIVE_TASK = 'RECEIVE_TASK';
function receiveTask(templateId, projectType = 'cause') {
  return {
    type: RECEIVE_TASK,
    templateId: templateId,
    projectType: projectType
  }
}

export function fetchTask(project) {
  return dispatch => {
    dispatch(requestTask());
    return axios.get('https://api.myjson.com/bins/12l7wx?q=' + project)
      .then(function (json) {
        dispatch(receiveTask('shell-1', project));
      });
  }
}
