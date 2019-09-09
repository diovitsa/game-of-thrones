import { FETCH_ALL_CHARACTERS, NEXT_PAGE, START, SUCCESS, ERROR } from '../constants';
import characterApi from './characterApi';
import { DataService } from '../services/DataService';

const notEmptyStore = {
  characters: {
    charactersList: [{ id: 'House Targaryen' }],
    isLoading: false
  }
};

const storeMock = {
  getState: jest.fn().mockImplementation(() => (notEmptyStore)),
  dispatch: jest.fn().mockImplementation(() => Promise.resolve())
};

const action = {
  type: FETCH_ALL_CHARACTERS,
  isCharactersAPICall: true,
  charactersCallAPI: ['https://www.anapioficeandfire.com/api/characters/298'],
  houseName: 'House Allyrion of Godsgrace'
};

const create = (store) => {
  const next = jest.fn();
  const invoke = action => characterApi(store)(next)(action);

  return { store, next, invoke }
};

const { next, invoke } = create(storeMock);

describe('characterApi middleware', () => {

  describe('with not relative action', () => {
    it('should skip fetching', () => {
      const noAPICallsAction = { type: NEXT_PAGE };
      invoke(noAPICallsAction);

      expect(next).toHaveBeenCalledWith(noAPICallsAction)
    });
  });

  describe('when characters list is already loaded', () => {
    it('should skip fetching', () => {
      const action = {
        type: FETCH_ALL_CHARACTERS,
        isCharactersAPICall: true,
        charactersCallAPI: ['https://www.anapioficeandfire.com/api/characters/298'],
        houseName: 'House Targaryen'
      };
      invoke(action);

      expect(next).toHaveBeenCalledWith(action)
    });
  });

  describe('with proper action & not loaded house', () => {
    const emptyStore = {
      characters: {
        charactersList: [],
        isLoading: false
      }
    };

    const storeMockWithResolve = {
      getState: jest.fn().mockImplementation(() => (emptyStore)),
      dispatch: jest.fn().mockImplementation(() => Promise.resolve())
    };

    const { invoke, store } = create(storeMockWithResolve);

    it('should dispatch characters fetch start action', () => {
      invoke(action);

      expect(store.dispatch).toHaveBeenCalledWith({
        ownName: 'House Allyrion of Godsgrace',
        type: FETCH_ALL_CHARACTERS + START
      })
    });

    describe('on success', () => {
      beforeEach(() => {
        jest.spyOn(DataService, 'getCharactersList').mockImplementation((api) => Promise.resolve(api));
      });

      it('should dispatch characters fetch success action', done => {
        invoke(action).then(() => {
          expect(store.dispatch).toHaveBeenNthCalledWith(2, {
            ownName: 'House Allyrion of Godsgrace',
            type: FETCH_ALL_CHARACTERS + SUCCESS,
            response: action.charactersCallAPI,
          });
          done();
        });
      });
    });

    describe('on failure', () => {
      const errorObj = {
        errorText: 'Characters fetching failure'
      };

      const storeMockWithReject = {
        getState: jest.fn().mockImplementation(() => (emptyStore)),
        dispatch: jest.fn().mockImplementation(() => Promise.reject())
      };

      const { invoke, store } = create(storeMockWithReject);

      beforeEach(() => {
        jest.spyOn(DataService, 'getCharactersList').mockImplementation(() => Promise.reject(errorObj));
      });

      it('should dispatch characters fetch error action', done => {
        invoke(action).catch(() => {
          expect(store.dispatch).toHaveBeenNthCalledWith(2, {
            error: errorObj,
            type: FETCH_ALL_CHARACTERS + ERROR,
          });
          done();
        });
      });
    });
  });
});
