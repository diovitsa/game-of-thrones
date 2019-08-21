import { FETCH_ALL_HOUSES, SUCCESS } from '../constants';

export default (houses = [], action) => {
  const { type, payload, response, index } = action;

  switch (type) {
    case FETCH_ALL_HOUSES + SUCCESS:
      console.log([...houses, { index, data: [...response] }]);
      return [...houses, { index, data: [...response] }];
    default:
      return houses;
  }
};