//------ Only import from external files should be here ------//

// simple actions to just return an object
export function loginUser(userInfo) {
  return {type: 'LOGIN_USER', payload: userInfo};
}

// redux-thunk is needed for this type of actions
export function logoutUser() {
  return async (dispatch) => {
    // some async function like removing data
    // from AsyncStorage or SQLight

    return dispatch({type: 'LOGOUT_USER'});
  };
}
