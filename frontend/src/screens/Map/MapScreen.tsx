import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';

export interface MapScreenProps {}

const MapScreen: React.FC<MapScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'open-sans-bold' }}>
        This is the Map Screen
      </Text>
      {/* <MapRoute /> */}
    </View>
  );
};

export const screenOptions: StackNavigationOptions = {
  headerTitle: 'Map'
  // headerLeft: () => (
  //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
  //     <Item
  //       title="Menu"
  //       iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
  //       onPress={() => {
  //         navData.navigation.toggleDrawer();
  //       }}
  //     />
  //   </HeaderButtons>
  // )
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
