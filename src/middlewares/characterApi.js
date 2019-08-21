import { ERROR, START, SUCCESS } from "../constants";

export default store => next => async action => {
  const { characterCallAPI, type, index, houseName, ...rest } = action;

  if (!houseName) return next(action);

  // store.dispatch({
  //   ...rest,
  //   type: type + START
  // });

  try {
    const res = await fetch(characterCallAPI);
    const response = await res.json();

    store.dispatch({
      ...rest,
      response,
      ownName: houseName,
      type: type + SUCCESS,
    });
  } catch (error) {
    store.dispatch({
      ...rest,
      error,
      type: type + ERROR,
    });
  }
};
