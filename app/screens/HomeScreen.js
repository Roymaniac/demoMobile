import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('SchoolList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHeading}>Nigeria University Directory</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/university.jpg')}
        />
      <Button title="Fetch Universities" onPress={handlePress} />
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/add-data.jpg')}
        />
      <Button title="Add University" onPress={handlePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3236',
  },
  imageContainer: {
    flex: 1 ,
  },
  image: {
    width: 320,
    height: 240,
    borderRadius: 18,
    marginBottom: 20,
  },
  textHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    color: 'white',
  },
});

export default HomeScreen;