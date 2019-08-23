import { ERROR, START, SUCCESS } from "../constants";

export default store => next => action => {
  const { charactersCallAPI, charactersCall, type, index, houseName, ...rest } = action;

  const isAlreadyLoaded = store.getState().characters.charactersList.some(characterList => {
    return characterList.id === houseName;
  });

  if (!charactersCall || isAlreadyLoaded) {
    return next(action);
  }

  store.dispatch({
    ...rest,
    ownName: houseName,
    type: type + START
  });

  const arrayOfPromises = charactersCallAPI.map(api => {
    return fetch(api);
  });

  Promise.all(arrayOfPromises)
    .then(values => values.map(value => value.json()))
    .then(values => Promise.all(values))
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
