import { API, FETCH_ALL_HOUSES, NEXT_PAGE, PREV_PAGE, FETCH_ALL_CHARACTERS } from '../constants';

export const fetchHousesData = index => ({
  type: FETCH_ALL_HOUSES,
  callAPI: `${API}/api/houses?page=${index}`,
  index
});

export const fetchCharacters = ({ swornMembers, name }) => ({
  type: FETCH_ALL_CHARACTERS,
  charactersCallAPI: swornMembers,
  houseName: name,
  charactersCall: true
});

export const nextPage = () => ({
  type: NEXT_PAGE,
});

export const prevPage = () => ({
  type: PREV_PAGE,
});
