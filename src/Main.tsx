import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Main = () => {
  const buttonPressHandler = () => {
    const someVariable = 'hello';
    console.log('HAHAHHA');
  };

  return (
    <View style={styles.container}>
      <Text>Open World!!!</Text>
      <Button title="WOW" onPress={buttonPressHandler} />
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
