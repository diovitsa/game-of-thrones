import reducer from './characters';
import { FETCH_ALL_CHARACTERS, START, SUCCESS } from '../constants';

const defaultCharacterList = { charactersList: [], isLoading: false };

describe('characters reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(defaultCharacterList)
  });

  describe('start fetching characters', () => {
    it('should set loading status', () => {
      expect(reducer(undefined, { type: FETCH_ALL_CHARACTERS + START })).toEqual({
        ...defaultCharacterList,
        isLoading: true
      })
    });
  });

  describe('fetching characters success', () => {
    const testAction = {
      type: FETCH_ALL_CHARACTERS + SUCCESS,
      ownName: 'House Allyrion of Godsgrace',
      response: [{
        books: ['https://www.anapioficeandfire.com/api/books/3', 'https://www.anapioficeandfire.com/api/books/5'],
        born: '',
        culture: 'Dornish',
        gender: 'Female',
        name: 'Delonne Allyrion',
        titles: ['Lady of Godsgrace'],
        url: 'https://www.anapioficeandfire.com/api/characters/298'
      }]
    };

    it('should return characters list', () => {
      expect(reducer(defaultCharacterList, testAction)).toEqual({
        ...defaultCharacterList,
        charactersList: [...defaultCharacterList.charactersList, {
          id: testAction.ownName,
          data: [...testAction.response]
        }], isLoading: false
      })
    });
  });

});