import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import FloorPlanScreen from '../../screens/FloorPlanScreen';
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import {HOME, FLOOR_PLAN, PROFILE} from '../route-paths';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#141E30',
          borderBottomColor: 'transparent',
          shadowColor: 'transparent',
          borderBottomWidth: 0,
          elevation: 0,
        },
        headerTintColor: '#BBC8D6',
        headerBackTitleVisible: false,
        headerTitleStyle: {color: '#BBC8D6'},
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#141E30',
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Icon
              name="th-list"
              size={25}
              color="#BBC8D6"
              style={{paddingVertical: 10}}
            />
          ),
          title: 'ToDos',
          // tabBarBadge: 3,
        }}
        name={HOME}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Icon
              name="image"
              size={25}
              color="#BBC8D6"
              style={{paddingVertical: 10}}
            />
          ),
          title: 'Floor Plan',
        }}
        name={FLOOR_PLAN}
        component={FloorPlanScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Icon
              name="user-circle-o"
              size={25}
              color="#BBC8D6"
              style={{paddingVertical: 10}}
            />
          ),
          title: 'Profile',
        }}
        name={PROFILE}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
