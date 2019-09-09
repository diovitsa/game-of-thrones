import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import CharacterDetails from './src/components/character-details/CharacterDetails';
import NavigationService from './src/services/NavigationService';
import Root from './src/components/Root/Root'
import { Provider } from 'react-redux';
import store from './src/store/store';

function App() {
  return (
    <Provider store={store}>
      <AppContainer ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}/>
    </Provider>
  );
}

const TopLevelNavigator = createStackNavigator(
  {
    Home: Root,
    CharacterDetails,
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(TopLevelNavigator);

export default App;
