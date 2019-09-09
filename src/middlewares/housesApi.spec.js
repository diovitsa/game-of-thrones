import { NEXT_PAGE, START, SUCCESS, ERROR, FETCH_ALL_HOUSES } from '../constants';
import { DataService } from '../services/DataService';
import housesApi from './housesApi';

const notEmptyStore = {
  houses: {
    housesList: [{ index: 1 }],
    isLoading: false
  },
  page: 1
};

const storeMock = {
  getState: jest.fn().mockImplementation(() => (notEmptyStore)),
  dispatch: jest.fn().mockImplementation(() => Promise.resolve())
};

const action = {
  type: FETCH_ALL_HOUSES,
  housesAPICall: true,
  index: 1
};

const create = (store) => {
  const next = jest.fn();
  const invoke = action => housesApi(store)(next)(action);

  return { store, next, invoke }
};

const { next, invoke } = create(storeMock);

describe('housesApi middleware', () => {
  describe('with not relative action', () => {

    it('should skip fetching', () => {
      const noApiCallsAction = { type: NEXT_PAGE };
      invoke(noApiCallsAction);

      expect(next).toHaveBeenCalledWith(noApiCallsAction)
    });
  });

  describe('when house list is already loaded', () => {
    it('should skip fetching', () => {

      invoke(action);

      expect(next).toHaveBeenCalledWith(action)
    });
  });

  describe('with proper action & not loaded page', () => {
    const emptyStore = {
      houses: {
        housesList: [],
        isLoading: false
      },
    };

    const storeMockWithResolve = {
      getState: jest.fn().mockImplementation(() => (emptyStore)),
      dispatch: jest.fn().mockImplementation(() => Promise.resolve())
    };

    const { invoke, store } = create(storeMockWithResolve);

    it('should dispatch characters fetch start action', () => {
      invoke(action);

      expect(store.dispatch).toHaveBeenCalledWith({
        type: FETCH_ALL_HOUSES + START
      })
    });

    describe('on success', () => {
      beforeEach(() => {
        jest.spyOn(DataService, 'getHousesList').mockImplementation((index) => Promise.resolve({ index }));
      });

      it('should dispatch characters fetch success action', done => {
        invoke(action).then(() => {
          expect(store.dispatch).toHaveBeenNthCalledWith(2, {
            response: { index: 1 },
            index: 1,
            type: FETCH_ALL_HOUSES + SUCCESS,
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
        jest.spyOn(DataService, 'getHousesList').mockImplementation(() => Promise.reject(errorObj));
      });

      it('should dispatch characters fetch error action', done => {
        invoke(action).catch(() => {
          expect(store.dispatch).toHaveBeenNthCalledWith(2, {
            error: errorObj,
            type: FETCH_ALL_HOUSES + ERROR,
          });
          done();
        });
      });
    });
  });
});
