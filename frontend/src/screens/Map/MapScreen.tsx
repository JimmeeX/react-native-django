import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';

import StyledText from '../../components/UI/StyledText';

export interface MapScreenProps {}

const MapScreen: React.FC<MapScreenProps> = () => {
  return (
    <View style={styles.container}>
      <StyledText>This is the Map Screen!</StyledText>
      {/* <MapRoute /> */}
    </View>
  );
};

export const screenOptions: StackNavigationOptions = {
  headerTitle: 'Map'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default MapScreen;
