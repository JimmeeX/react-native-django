import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';

export interface CalendarScreenProps {}

const CalendarScreen: React.FC<CalendarScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Calendar Screen</Text>
    </View>
  );
};

// export const screenOptions = () => {
//   return {
//     headerTitle: 'Calendar'
//     // headerLeft: () => (
//     //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
//     //     <Item
//     //       title="Menu"
//     //       iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
//     //       onPress={() => {
//     //         navData.navigation.toggleDrawer();
//     //       }}
//     //     />
//     //   </HeaderButtons>
//     // )
//   };
// };

export const screenOptions: StackNavigationOptions = {
  headerTitle: 'Calendar'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default CalendarScreen;
