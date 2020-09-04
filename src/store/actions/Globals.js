/**
 * settings and other global items
 */

import {CHANGE_THEME} from './actionTypes';
import {Themes} from '../../configs/styles/Theme';
import {setThemeInStorage, getThemeFromStorage} from '../../utils/Persistor';

export function initialTheme() {
  let themeName = Themes.LIGHT;
  return async (dispatch) => {
    try {
      themeName = await getThemeFromStorage();
    } catch (err) {
      console.log('__getThemeFromStorage', err);
    }
    return dispatch({type: CHANGE_THEME, payload: {themeName}});
  };
}

/**
 * toggling name is not the best naming
 * maybe other themes will be added
 */
export function changeTheme(themeName = [Themes.LIGHT]) {
  return async (dispatch) => {
    try {
      setThemeInStorage(themeName);
    } catch (err) {
      console.log('__setThemeInStorage', err);
    }

    return dispatch({type: CHANGE_THEME, payload: {themeName}});
  };
}
