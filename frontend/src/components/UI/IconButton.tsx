import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle
} from 'react-native';

import Colors from '../../constants/Colors';

interface IconButtonProps {
  // size?: number;
  children: React.ReactNode;
  style?: ViewStyle;
  onPress(): void;
}

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { children, onPress, style } = props;

  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    width: 45,
    height: 45,
    borderRadius: 25,
    alignContent: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center'
    // fontFamily: 'open-sans'
    // fontSize: 18
  }
});

export default IconButton;
