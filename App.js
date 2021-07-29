import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { InitNavigator } from './src/navigation/InitNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <InitNavigator />
    </NavigationContainer>
  )
}
