import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from '../../store/store';
import HousesList from '../houses-list/HousesList';


function Root() {
  return (
    <Provider store={store}>
      <View>
        <HousesList/>
      </View>
    </Provider>
  );
}

export default Root;