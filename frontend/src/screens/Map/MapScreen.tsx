import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';

import MapRoute from '../../components/Map/MapRoute';
import StyledText from '../../components/UI/StyledText';
import DatePicker from '../../components/Map/DatePicker';

import dummyItinerary from '../../data/dummy-itinerary';

/**
 * MapRoute Component
 * Horizontal Scrollable Day Picker
 * Itinerary List
 */

export interface MapScreenProps {}

const MapScreen: React.FC<MapScreenProps> = () => {
  const { itineraryItems } = dummyItinerary[0];

  return (
    <View style={styles.mapScreenContainer}>
      <MapRoute style={styles.mapRoute} itineraryItems={itineraryItems} />
      <DatePicker />
      <View style={styles.itineraryList}>
        <StyledText>This is the Itinerary List</StyledText>
      </View>
    </View>
  );
};

export const screenOptions: StackNavigationOptions = {
  headerTitle: 'Map'
};

const styles = StyleSheet.create({
  mapScreenContainer: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center'
    // justifyContent: 'center'
  },
  mapRoute: {
    width: '100%',
    height: '50%'
    // backgroundColor: 'aqua'
  },
  itineraryList: {
    backgroundColor: 'tomato'
  }
});

export default MapScreen;
