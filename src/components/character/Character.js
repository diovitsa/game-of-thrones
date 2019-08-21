import React from 'react';
import { Text } from 'react-native';

function Character({ character: { data: { name } } }) {

  return (
    <Text style={{ color: 'blue', fontSize: 14 }}>
      {name}
    </Text>
  );
}

export default Character;