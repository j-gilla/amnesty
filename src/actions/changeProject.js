
import {fetchTask} from './fetchTask';

export const CHANGE_PROJECT = 'CHANGE_PROJECT';
export function changeProject(project) {
  return dispatch => {
    dispatch({
      type: CHANGE_PROJECT,
      project: project
    });
    return fetchTask(project)(dispatch);
  }
}