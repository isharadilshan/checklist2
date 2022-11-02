import {DefaultTheme} from 'react-native-paper';
import Colors from './colors';

export const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroundLight: Colors.backgroundLight,
    white: Colors.white,
    black: Colors.black,
    greyBlack: Colors.greyBlack,
    blue: Colors.blue,
    mattBlue: Colors.mattBlue,
    grey: Colors.grey,
    blueGrey: Colors.blueGrey,
    lightGreen: Colors.lightGreen,
    mattGreen: Colors.mattGreen,
    red: Colors.red,
  },
};
