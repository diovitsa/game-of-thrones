import { FETCH_CHARACTER, SUCCESS } from '../constants';

const defaultCharacterList = { isLoading: false, characterList: [], };

export default (characters = defaultCharacterList, action) => {
  const { type, payload, response, ownName } = action;

  switch (type) {
    case FETCH_CHARACTER + SUCCESS:
      return { ...characters, characterList: [...characters.characterList, { id: ownName, data: response }] , isLoading: false};
    default:
      return characters;
  }
};