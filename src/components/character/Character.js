import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import NavigationService from '../../services/NavigationService';

function Character({ character }) {

  return (
    <TouchableOpacity onPress={() => NavigationService.navigate('CharacterDetails', { character })}>
      <Text style={{ color: 'blue', fontSize: 14 }}>
        {character.name}
      </Text>
    </TouchableOpacity>
  );
}

export default Character;