import { API, FETCH_ALL_HOUSES, NEXT_PAGE, PREV_PAGE } from '../constants';

export const fetchHousesData = index => ({
  type: FETCH_ALL_HOUSES,
  callAPI: `${API}/api/houses?page=${index}`,
  index
});

export const nextPage = () => ({
  type: NEXT_PAGE,
});

export const prevPage = () => ({
  type: PREV_PAGE,
});
