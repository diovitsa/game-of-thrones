import React, { useState } from 'react';
import { Text, View } from 'react-native';
import CharacterList from '../character-list/CharacterList';

function House({ house }) {
  const [isOpen, setOpen] = useState(false);

  const houseDetails = isOpen
    ? <View>
      <Text>Words: {house.words || '-'}</Text>
      <CharacterList house={house}/>
    </View>
    : null;

  return (
    <View>
      <Text style={{ color: 'blue', fontSize: 20 , textAlign: 'center'}} onPress={() => setOpen(!isOpen)}>{house.name}</Text>
      {houseDetails}
    </View>
  );
}

export default House;