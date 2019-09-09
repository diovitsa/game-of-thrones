import { FETCH_ALL_CHARACTERS } from '../constants';

export const fetchCharacters = ({ swornMembers, name }) => ({
  type: FETCH_ALL_CHARACTERS,
  charactersCallAPI: swornMembers,
  houseName: name,
  isCharactersAPICall: true
});