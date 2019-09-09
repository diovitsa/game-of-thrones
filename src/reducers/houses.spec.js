import reducer from './houses';
import { FETCH_ALL_HOUSES, START, SUCCESS } from '../constants';

const defaultHouses = { isLoading: true, housesList: [] };

describe('houses reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(defaultHouses)
  });

  describe('start fetching houses', () => {
    it('should set loading status', () => {
      expect(reducer(undefined, { type: FETCH_ALL_HOUSES + START })).toEqual({ ...defaultHouses, isLoading: true })
    });
  });

  describe('fetching houses success', () => {
    const testAction = {
      type: FETCH_ALL_HOUSES + SUCCESS,
      index: 1,
      response: [{
        coatOfArms: 'A golden wreath, on a blue field with a gold border(Azure, a garland of laurel within a bordure or)',
        name: 'House Algood',
        swornMembers: [],
        url: 'https://www.anapioficeandfire.com/api/houses/1',
        words: ''
      }]
    };

    it('should return new houses', () => {
      expect(reducer(defaultHouses, testAction)).toEqual({
        ...defaultHouses,
        housesList: [...defaultHouses.housesList, { index: testAction.index, data: [...testAction.response] }],
        isLoading: false
      })
    });
  });

});