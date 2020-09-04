import AsyncStorage from '@react-native-community/async-storage';
import {StorageKeys} from './Constants';

export const setThemeInStorage = async (themeName) => {
  return AsyncStorage.setItem(StorageKeys.THEME_NAME, themeName);
};

export const getThemeFromStorage = async () => {
  return AsyncStorage.getItem(StorageKeys.THEME_NAME);
};
