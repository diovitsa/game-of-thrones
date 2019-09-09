import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Character from '../character/Character';
import { fetchCharacters } from '../../actions/characters';
import { connect } from 'react-redux';
import LoadingBar from '../loading-bar/LoadingBar';
import { charactersSelector } from '../../selectors';

export function CharacterList({ house, characters, fetchCharacters }) {

  useEffect(() => {
    fetchCharacters(house);
  }, []);

  const charactersList = characters
    ? characters.data.map((character, index) => {
      return <Character key={index} character={character}/>
    })
    : null;

  return (
    <View>
      <Text>Characters: </Text>
      {charactersList || <LoadingBar/>}
    </View>
  );
}

const mapStateToProps = (state, ownProps) => ({
  characters: charactersSelector(state, ownProps),
});

const mapDispatchToProps = {
  fetchCharacters,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);