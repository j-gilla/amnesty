
import {RECEIVE_USER_INFO} from '../actions/fetchUser'

const defaultUser = {
  id: 2,
  fullname: 'JACK  GILBERT',
  username: 'jgilla',
  email: 'jack@focallabs.co.uk',
  country: {
    value: 'uk',
    label: 'United Kingdom'
  },
  city: 'London',
  trophy: 10
};

const user = (state = defaultUser, action) => {
  switch (action.type) {
    case 'COMPLETE_TASK':
      return Object.assign({}, state, {
        trophy: state.trophy + 1
      });
    case RECEIVE_USER_INFO:
      return Object.assign({}, state, action.userInfo, {
        fullname: state.userInfo.name
      });
    default:
      return state;
  }
}
export default user;
