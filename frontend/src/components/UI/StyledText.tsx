import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface StyledTextProps {
  children: React.ReactNode;
}

const StyledText: React.FC<StyledTextProps> = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: { fontFamily: 'open-sans' }
});

export default StyledText;
