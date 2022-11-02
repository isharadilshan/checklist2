import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import analytics from '@react-native-firebase/analytics';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import GradientBackground from '../components/wrappers/GradientBackground';
import GradientHeader from '../components/atoms/GradientHeader';
import {HOME, SETTINGS} from './route-paths';
import Colors from '../theme/colors';
import MenuButton from '../components/organism/MenuButton';

const Stack = createStackNavigator();

const Routes = () => {
  const {colors} = useTheme();
  const routeNameRef = useRef();
  const navigationRef = useRef();

  const screenRouteAnalytics = () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.current.getCurrentRoute().name;

    if (previousRouteName !== currentRouteName) {
      analytics().logScreenView({
        screen_name: currentRouteName,
        screen_class: currentRouteName,
      });
    }

    // Save the current route name for later comparision
    routeNameRef.current = currentRouteName;
  };

  const handleOnReady = () =>
    (routeNameRef.current = navigationRef.current.getCurrentRoute().name);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={handleOnReady}
      onStateChange={screenRouteAnalytics}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: colors.grey,
          header: props => {
            return <GradientHeader {...props} />;
          },
          headerBackground: () => (
            <GradientBackground color={Colors.darkGradient} />
          ),
          headerBackTitleVisible: false,
          // headerLeft: props => <MenuButton {...props} />,
          // headerTitleStyle: {fontFamily: FONT_BOLD},
        }}>
        <Stack.Screen
          name={HOME}
          options={{title: 'checklist'}}
          component={HomeScreen}
        />
        <Stack.Screen
          name={SETTINGS}
          options={{title: 'Settings'}}
          component={SettingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
