import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import { View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './app/screens/HomeScreen';
// import SchoolListScreen from './app/screens/SchooListScreen';

// import AppText from './app/components/AppText';
// import AppButton from './app/components/AppButton';
// const Stack = createStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Nigeria Universities' }} />
    //     <Stack.Screen name="SchoolList" component={SchoolListScreen} options={{ title: 'Universities In Nigeria' }} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <WelcomeScreen />
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}
    // >
    //   <AppText>I love React Native!</AppText>
    //   <AppButton title={'Login'} onPress={() => console.log('Tapped')} />
    // </View>
    // <ViewImageScreen />
  );
};

export default App;