import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';

import StyledText from '../../components/UI/StyledText';

export interface CalendarScreenProps {}

const CalendarScreen: React.FC<CalendarScreenProps> = () => {
  return (
    <View style={styles.container}>
      <StyledText>This is the Calendar Screen</StyledText>
    </View>
  );
};

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
