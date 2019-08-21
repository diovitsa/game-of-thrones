import React from 'react';
import { Text } from 'react-native';

function House({ house }) {
  return (
    <Text>
      {house.name}
    </Text>
  );
}

export default House;