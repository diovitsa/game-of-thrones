import { ERROR, START, SUCCESS } from "../constants";
import { DataService } from '../services/DataService';

export default store => next => action => {
  const { charactersCallAPI, charactersAPICall, type, index, houseName, ...rest } = action;

  const isAlreadyLoaded = store.getState().characters.charactersList.some(characterList => {
    return characterList.id === houseName;
  });

  if (!charactersAPICall || isAlreadyLoaded) return next(action);

  store.dispatch({
    ...rest,
    ownName: houseName,
    type: type + START
  });

  const arrayOfPromises = charactersCallAPI.map(api => {
    return DataService.getCharactersList(api);
  });

  Promise.all(arrayOfPromises)
    .then((values => {
      store.dispatch({
        ...rest,
        response: values,
        ownName: houseName,
        type: type + SUCCESS,
      });
    }))
    .catch(error => {
      store.dispatch({
        ...rest,
        error,
        type: type + ERROR,
      });
    });

};
