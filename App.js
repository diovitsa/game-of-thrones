import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store';
import HousesList from './src/components/houses-list/HousesList';

function App() {
  return (
    <Provider store={store}>
      <View>
        <HousesList/>
      </View>
    </Provider>
  );
}

export default App;