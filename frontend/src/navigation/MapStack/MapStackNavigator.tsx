import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import MapScreen, {
  screenOptions as mapScreenOptions
} from '../../screens/Map/MapScreen';
import { MapParamList } from './MapParamList';
import Colors from '../../constants/Colors';

const MapStack = createStackNavigator<MapParamList>();

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

interface MapStackNavigatorProps {}

const MapStackNavigator: React.FC<MapStackNavigatorProps> = () => {
  return (
    <MapStack.Navigator screenOptions={defaultNavOptions}>
      <MapStack.Screen
        name="Map"
        component={MapScreen}
        options={mapScreenOptions}
      />
    </MapStack.Navigator>
  );
};

export default MapStackNavigator;
