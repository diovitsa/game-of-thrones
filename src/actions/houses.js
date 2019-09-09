import { FETCH_ALL_HOUSES } from '../constants';

export const fetchHousesData = index => ({
  type: FETCH_ALL_HOUSES,
  housesAPICall: true,
  index
});