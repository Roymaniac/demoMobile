import React from 'react';
import { GestureHandlerRootView, } from 'react-native-gesture-handler';
import AppCard from './app/components/AppCard';
import { View } from 'react-native';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AppIcon from './app/components/AppIcon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
// import WelcomeScreen from './app/screens/WelcomeScreen';

const App = () => {
  return (
    <AccountScreen />
  );
};

export default App;