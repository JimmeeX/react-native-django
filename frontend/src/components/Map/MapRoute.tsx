import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export interface MapRouteProps {}

const MapRoute: React.FC<MapRouteProps> = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    width: '100%',
    height: '100%'
  }
});

export default MapRoute;
