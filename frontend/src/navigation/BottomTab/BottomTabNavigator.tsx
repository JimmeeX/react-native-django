import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MapStackNavigator from '../MapStack/MapStackNavigator';
import CalendarStackNavigator from '../CalendarStack/CalendarStackNavigator';
import { BottomTabParamList } from './BottomTabParamList';
import Colors from '../../constants/Colors';

interface BottomTabNavigatorProps {}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator: React.FC<BottomTabNavigatorProps> = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Map"
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.accent
      }}
    >
      <BottomTab.Screen
        name="Map"
        component={MapStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-navigate' : 'ios-navigate'}
              color={color}
              size={size}
            />
          )
        }}
      />
      <BottomTab.Screen
        name="Calendar"
        component={CalendarStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-calendar' : 'ios-calendar'}
              color={color}
              size={size}
            />
          )
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
