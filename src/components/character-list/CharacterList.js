import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Character from '../character/Character';
import { fetchCharacter } from '../../actions/ac';
import { connect } from 'react-redux';

function CharacterList({ house, characters, fetchCharacter }) {

  useEffect(() => {
    house.swornMembers.map(member => {
      fetchCharacter(member, house);
    });
  }, []);

  const currentCharacters = characters.characterList.filter(charactersBlock => {
    return charactersBlock.id === house.name;
  });

  const charactersList = currentCharacters.map(character => {
    return <Character character={character}/>
  });

  // console.log(charactersList);
  return (
    <View>
      <Text>Characters: </Text>
      {charactersList}
    </View>
  );
}

const mapStateToProps = state => ({
  characters: state.characters,
  // isLoading: articlesLoadingSelector(state)
});

const mapDispatchToProps = {
  fetchCharacter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);