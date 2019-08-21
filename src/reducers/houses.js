import { FETCH_ALL_HOUSES, FETCH_CHARACTER, START, SUCCESS } from '../constants';

const defaultHouses = { isLoading: true, housesList: [] };

export default (houses = defaultHouses, action) => {
  const { type, payload, response, index, ownName } = action;

  switch (type) {
    case FETCH_ALL_HOUSES + START:
      return { ...houses, isLoading: true };
    case FETCH_ALL_HOUSES + SUCCESS:
      return { ...houses, housesList: [...houses.housesList, { index, data: [...response] }], isLoading: false };
    default:
      return houses;
  }
};