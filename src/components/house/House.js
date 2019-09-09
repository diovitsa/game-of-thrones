import React from 'react';
import { Text, View } from 'react-native';
import CharacterList from '../character-list/CharacterList';

function House({ house }) {
  const [isOpen, setOpen] = React.useState(false);

  const houseDetails = isOpen
    ? <View id={'housesDetails'}>
      <Text>Words: {house.words || '-'}</Text>
      <CharacterList house={house}/>
    </View>
    : null;

  return (
    <View id={'houseWrapper'}>
      <Text id={'header'} style={{ color: 'blue', fontSize: 20, textAlign: 'center' }}
            onPress={() => setOpen(!isOpen)}>{house.name}</Text>
      {houseDetails}
    </View>
  );
}

export default House;