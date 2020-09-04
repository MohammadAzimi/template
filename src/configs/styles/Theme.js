import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

const Themes = {
  LIGHT: 'lightTheme',
  DARK: 'darkTheme',
};
Object.freeze(Themes);

const lightColors = {
  ...NavigationDefaultTheme.colors,
  ...PaperDefaultTheme.colors,
  contrast: '#FFFFFF',
};

const darkColors = {
  ...NavigationDarkTheme.colors,
  ...PaperDarkTheme.colors,
  contrast: '#37474F',
  background: '#263238',
  card: '#2d3940',
};

const lightTheme = {
  name: Themes.LIGHT,
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: lightColors,
};

const darkTheme = {
  name: Themes.DARK,
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  dark: true,
  colors: darkColors,
};

const getTheme = (themeName) => {
  switch (themeName) {
    case Themes.DARK:
      return darkTheme;
    case Themes.LIGHT:
    default:
      return lightTheme;
  }
};

export {Themes, getTheme};
