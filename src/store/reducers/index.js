import {combineReducers} from 'redux';

//------ Should be in a seprate file ------//

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
});

export default rootReducer;
