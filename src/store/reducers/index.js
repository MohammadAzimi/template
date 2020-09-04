import {combineReducers} from 'redux';
import globalReducer from './Globals';

//------ Should be in a separate file ------//

const initialState = {
  token: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        ...action.payload,
      };
    case 'LOGOUT_USER':
      return {
        token: null,
      };
    default:
      return state;
  }
}

//------ combine reducers as an index ------//

const rootReducer = combineReducers({
  auth: authReducer,
  globals: globalReducer,
});

export default rootReducer;
