import React from 'react';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

import Navigation from './src/navigation';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [fontsLoaded] = useFonts({
    'open-sans': require('./src/assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./src/assets/fonts/OpenSans-Bold.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Navigation />;
};

export default App;
