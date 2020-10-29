import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Open World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
});

export default Main;
