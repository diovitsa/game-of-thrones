import { ERROR, START, SUCCESS } from "../constants";
import { DataService } from '../services/DataService';

export default ({ getState, dispatch }) => next => action => {
  const { charactersCallAPI, isCharactersAPICall, type, index, houseName, ...rest } = action;

  const isAlreadyLoaded = getState().characters.charactersList.some(characterList => {
    return characterList.id === houseName;
  });

  if (!isCharactersAPICall || isAlreadyLoaded) return next(action);

  dispatch({
    ...rest,
    ownName: houseName,
    type: type + START
  });

  const arrayOfPromises = charactersCallAPI.map(api => {
    return DataService.getCharactersList(api);
  });

  return Promise.all(arrayOfPromises)
    .then((values => dispatch({
        ...rest,
        response: values,
        ownName: houseName,
        type: type + SUCCESS,
      })
    ))
    .catch(error => dispatch({
        ...rest,
        error,
        type: type + ERROR,
      })
    );

};
