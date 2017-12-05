
import {url} from './api';
import axios from 'axios';

export const REQUEST_USER_INFO = 'REQUEST_USER_INFO';
function requestUserInfo() {
  return {
    type: REQUEST_USER_INFO
  }
}

export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';
function receiveUserInfo(userInfo) {
  return {
    type: RECEIVE_USER_INFO,
    userInfo: userInfo
  }
}

export function fetchUserInfo(project) {
  return dispatch => {
    dispatch(requestUserInfo());
    return axios({
      method: 'GET',
      url: url('users/me'),
      headers: {
        "Authorization": 'Bearer qnxmltLPu9g5UVcI4oBa4W7f5AFLdWJ2LOdF5FTF'
      }
    })
    .then(function (res) {
      dispatch(receiveUserInfo(res.data));
    });
  }
}
