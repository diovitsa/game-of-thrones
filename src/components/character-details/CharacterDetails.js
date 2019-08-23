import React from 'react';
import { Text, View } from 'react-native';

function CharacterDetails({ navigation: { state: { params: { character } } } }) {
  const titles = character.titles.map(title => {
    return <Text>{title} </Text>
  });

  return (
    <View>
      <Text>
        Name: {character.name}
      </Text>
      <Text>
        Culture: {character.culture}
      </Text>
      <Text>
        Gender: {character.gender}
      </Text>
      <Text>
        Born: {character.born || 'no info'}
      </Text>
      <Text>
        Titles: {titles}
      </Text>
    </View>
  );
}

export default CharacterDetails;