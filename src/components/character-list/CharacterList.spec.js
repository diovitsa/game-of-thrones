import React from 'react';
import { CharacterList } from './CharacterList';
import renderer from 'react-test-renderer'

describe('CharacterList', () => {
  let component;
  // let componentInstance;

  const emptyCharactersProps = {
    house: 'testHouse',
    fetchCharacters: () => {
    },
    characters: null
  };

  const propsWithCharacters = {
    ...emptyCharactersProps,
    characters: { data: [{ name: 'testName1' }, { name: 'testName2' }] }
  };

  describe('when loading in progress', () => {
    it('should show loading bar', () => {
      component = renderer.create(<CharacterList {...emptyCharactersProps}/>).toJSON();
      expect(component).toMatchSnapshot()
    });
  });

  describe('when characters are loaded', () => {
    it('should show loading bar', () => {
      component = renderer.create(
        <CharacterList {...propsWithCharacters}/>).toJSON();
      expect(component).toMatchSnapshot()
    });
  });

});