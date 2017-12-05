
export const REQUEST_UPDATE_PROFILE = 'REQUEST_UPDATE_PROFILE';
export function requestUpdateProfile() {
  return {
    type: REQUEST_UPDATE_PROFILE
  }
}
export const RESPONSE_UPDATE_PROFILE = 'RESPONSE_UPDATE_PROFILE';
export function responseUpdateProfile(){
  return {
    type: RESPONSE_UPDATE_PROFILE
  }
}

export function updateProfile(profile){
  return dispatch => {
    dispatch(requestUpdateProfile());
    return fetch('https://api.myjson.com/bins/12l7wx')
      .then(res => res.json())
      .then(function (json) {
        dispatch(responseUpdateProfile('shell-1'));
      });
  }
}
