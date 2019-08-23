import { FETCH_ALL_CHARACTERS, SUCCESS, START } from '../constants';

const defaultCharacterList = { charactersList: [], isLoading: false };

export default (characters = defaultCharacterList, action) => {
  const { type, payload, response, ownName } = action;

  switch (type) {
    case FETCH_ALL_CHARACTERS + SUCCESS:
      return {
        ...characters,
        charactersList: [...characters.charactersList, { id: ownName, data: [...response] }], isLoading: false
      };
    case FETCH_ALL_CHARACTERS + START:
      return {
        ...characters, isLoading: true
      };
    default:
      return characters;
  }
};