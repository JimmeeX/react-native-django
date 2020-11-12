import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface StyledTextProps {
  children: React.ReactNode;
  style?: TextStyle;
}

const StyledText: React.FC<StyledTextProps> = ({ children, style }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: { fontFamily: 'open-sans' }
});

export default StyledText;
