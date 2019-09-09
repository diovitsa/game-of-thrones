import { FETCH_ALL_CHARACTERS } from '../constants';
import { fetchCharacters } from './characters';

describe('Characters actions', () => {
  it('should load characters with proper API and house name', () => {
    const houseExample = {
      name: 'House Algood',
      swornMembers: ['https://www.anapioficeandfire.com/api/characters/298', 'https://www.anapioficeandfire.com/api/characters/1129'],
    };

    const expectedAction = {
      type: FETCH_ALL_CHARACTERS,
      charactersCallAPI: houseExample.swornMembers,
      houseName: houseExample.name,
      isCharactersAPICall: true
    };

    expect(fetchCharacters(houseExample)).toEqual(expectedAction)
  });
});