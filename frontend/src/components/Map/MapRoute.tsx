import React, { useRef } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { ItineraryItemProps } from '../../models/itinerary-item';
import IconButton from '../UI/IconButton';

/**
 * Route Notes
 * List of Markers
 * Favourite or Not
 * Generate Route
 */

export interface MapRouteProps {
  itineraryItems: ItineraryItemProps[];
  style: ViewStyle;
}

const MapRoute: React.FC<MapRouteProps> = (props) => {
  const { style } = props;
  const mapEl = useRef<MapView>(null);

  // Default View fits all markers on the map
  const setDefaultView = (): void => {
    mapEl.current?.fitToElements(false);
  };

  return (
    <View style={{ ...styles.mapRouteContainer, ...style }}>
      <MapView ref={mapEl} style={styles.map} onLayout={setDefaultView} />
      <IconButton onPress={setDefaultView} style={styles.zoomToFitButton}>
        <MaterialIcons name="zoom-out-map" size={24} color="black" />
      </IconButton>
    </View>
  );
};

const styles = StyleSheet.create({
  mapRouteContainer: {
    position: 'relative'
  },
  map: {
    width: '100%',
    height: '100%'
  },
  zoomToFitButton: {
    position: 'absolute',
    bottom: 10,
    right: 10
  }
});

export default MapRoute;
