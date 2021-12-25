import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import store from '@model/store';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from '@routes/stacknavigator';

export default function App() {     
  return (
    <Provider store={store}>      
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
