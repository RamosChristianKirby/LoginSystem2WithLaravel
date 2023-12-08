// App.js (or your root component)
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigation/MainStack'; // Import your MainStack navigator

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
