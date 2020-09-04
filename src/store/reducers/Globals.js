/**
 * settings and other global items
 */

import {CHANGE_THEME} from '../actions/actionTypes';
import {Themes} from '../../configs/styles/Theme';

const initialState = {
  themeName: Themes.LIGHT,
};

function globalReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case CHANGE_THEME:
      return {
        ...state,
        themeName: payload.themeName,
      };
    default:
      return state;
  }
}

export default globalReducer;
