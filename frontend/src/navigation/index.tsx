import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from './BottomTab/BottomTabNavigator';

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
