import React from 'react';
import { StyleSheet, View } from 'react-native';
import StyledText from '../UI/StyledText';

/**
 * TODO:
 * Color
 * OrderText
 * isFavourited Distinction
 */

interface MapMarkerProps {}

const MapMarker: React.FC<MapMarkerProps> = () => {
  return (
    <View style={styles.mapMarkerContainer}>
      <StyledText style={styles.mapMarkerText}>1</StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  mapMarkerContainer: {
    backgroundColor: 'tomato',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapMarkerText: {
    color: 'white'
  }
});

export default MapMarker;
