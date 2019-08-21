import { ERROR, START, SUCCESS } from "../constants";
import { head } from 'lodash';

export default store => next => async action => {
  const { callAPI, type, index, ...rest } = action;

  const currentPage = head([...store.getState().houses.housesList.filter((housesPage) => {
    return housesPage.index === store.getState().page;
  })]);

  if (!callAPI || currentPage) return next(action);

  store.dispatch({
    ...rest,
    type: type + START
  });

  try {
    const res = await fetch(callAPI);
    const response = await res.json();

    store.dispatch({
      ...rest,
      response,
      index,
      type: type + SUCCESS
    });
  } catch (error) {
    store.dispatch({
      ...rest,
      error,
      type: type + ERROR
    });
  }
};
