import reducer from './page';
import { NEXT_PAGE, PREV_PAGE } from '../constants';

describe('paging reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(1)
  });

  describe('NEXT_PAGE', () => {
    it('should return initial state', () => {
      expect(reducer(1, { type: NEXT_PAGE })).toEqual(2)
    });
  });

  describe('PREV_PAGE', () => {
    it('should return initial state', () => {
      expect(reducer(2, { type: PREV_PAGE })).toEqual(1)
    });
  });

});