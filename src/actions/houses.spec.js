import { fetchHousesData } from './houses';
import { FETCH_ALL_HOUSES } from '../constants';

describe('Houses actions', () => {
  it('should fetch houses data for current index', () => {
    const expectedAction = {
      type: FETCH_ALL_HOUSES,
      housesAPICall: true,
      index: 1
    };
    expect(fetchHousesData(1)).toEqual(expectedAction)
  })
});