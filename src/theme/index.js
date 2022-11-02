import {DefaultTheme} from 'react-native-paper';
import Colors from './colors';

export const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroundLight: Colors.backgroundLight,
    backgroundDark: Colors.backgroundDark,
    primaryLight: Colors.primaryLight,
    white: Colors.white,
    black: Colors.black,
    blue: Colors.blue,
    grey: Colors.grey,
    blueGrey: Colors.blueGrey,
    darkBlueGrey: Colors.darkBlueGrey,
    pink: Colors.pink,
    ash: Colors.ash,
    red: Colors.red,
    lightPurple: Colors.lightPurple,
  },
};
