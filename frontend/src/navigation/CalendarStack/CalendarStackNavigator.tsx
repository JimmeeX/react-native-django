import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import CalendarScreen, {
  screenOptions as calendarScreenOptions
} from '../../screens/Calendar/CalendarScreen';
import { CalendarParamList } from './CalendarParamList';
import Colors from '../../constants/Colors';

const MapStack = createStackNavigator<CalendarParamList>();

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  // headerTitleStyle: {
  //   fontFamily: 'open-sans-bold'
  // },
  // headerBackTitleStyle: {
  //   fontFamily: 'open-sans'
  // },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

interface CalendarStackNavigatorProps {}

const CalendarStackNavigator: React.FC<CalendarStackNavigatorProps> = () => {
  return (
    <MapStack.Navigator screenOptions={defaultNavOptions}>
      <MapStack.Screen
        name="Calendar"
        component={CalendarScreen}
        options={calendarScreenOptions}
      />
    </MapStack.Navigator>
  );
};

export default CalendarStackNavigator;
