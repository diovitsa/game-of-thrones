import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

function CharacterDetails({ navigation: { state: { params: { character } } } }) {

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
      <FlatList
        data={character.titles}
        renderItem={({ item }) => <Text>{item}</Text>}
        ListHeaderComponentStyle={styles.title}
        ListHeaderComponent={<Text style={{ fontWeight: 'bold' }}>Titles: </Text>}
        keyExtractor={(item) => item}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  }
});

export default CharacterDetails;