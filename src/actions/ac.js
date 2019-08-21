import { API, FETCH_ALL_HOUSES, NEXT_PAGE, PREV_PAGE, FETCH_CHARACTER } from '../constants';

export const fetchHousesData = index => ({
  type: FETCH_ALL_HOUSES,
  callAPI: `${API}/api/houses?page=${index}`,
  index
});

export const fetchCharacter = (characterAPI, house) => ({
  type: FETCH_CHARACTER,
  characterCallAPI: `${characterAPI}`,
  houseName: house.name
});

export const nextPage = () => ({
  type: NEXT_PAGE,
});

export const prevPage = () => ({
  type: PREV_PAGE,
});
