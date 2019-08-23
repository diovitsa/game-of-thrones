import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import CharacterDetails from './src/components/character-details/CharacterDetails';
import NavigationService from './src/services/NavigationService';
import Root from './src/components/Root/Root'

function App() {
  return (
    <AppContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
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
