import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, Linking, StyleSheet } from 'react-native';

const API_URL = 'http://universities.hipolabs.com/search?country=nigeria';

const SchoolListScreen = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setSchools(data);
    } catch (error) {
      console.error('Error fetching schools:', error);
    }
  };

  const openSchoolWebsite = (url) => {
    Linking.openURL(url);
  };

  const renderSchoolItem = ({ item }) => (
    <TouchableOpacity onPress={() => openSchoolWebsite(item.web_pages[0])}>
      <View style={styles.item}>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={schools}
        renderItem={renderSchoolItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
  },
  item: {
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    marginBottom: 2
  },
});

export default SchoolListScreen;