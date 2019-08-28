import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from '../../store/store';
import HousesList from '../houses-list/HousesList';


function Root() {
  return (
    <Provider store={store}>
      <View style={styles.flex}>
        <Text style={styles.text}>Houses of Westeros</Text>
        <HousesList/>
      </View>
    </Provider>
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