import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HousesList from '../houses-list/HousesList';


function Root() {
  return (
    <View style={styles.flex}>
      <Text style={styles.text}>Houses of Westeros</Text>
      <HousesList/>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Root;