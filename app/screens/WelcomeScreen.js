import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native'
import AppButton from '../components/AppButton'


function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={6}
      style={styles.background}
      source={require('../assets/background.jpg')}>

      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagLine}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => console.log('Tapped')} />
        <AppButton title="Register" color="blue" onPress={() => console.log('Tapped')} />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagLine: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
})

export default WelcomeScreen