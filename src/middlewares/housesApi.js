import { ERROR, START, SUCCESS } from "../constants";
import { head } from 'lodash';
import { DataService } from '../services/DataService';

export default ({ dispatch, getState }) => next => action => {
  const { housesAPICall, type, index, ...rest } = action;

  const isAlreadyLoaded = head([...getState().houses.housesList.filter((housesPage) => {
    return housesPage.index === getState().page;
  })]);

  if (!housesAPICall || isAlreadyLoaded) return next(action);

  dispatch({
    ...rest,
    type: type + START
  });


  return DataService.getHousesList(index)
    .then(response => dispatch({
      ...rest,
      response,
      index,
      type: type + SUCCESS
    }))
    .catch(error => dispatch({
      ...rest,
      error,
      type: type + ERROR
    }));
};
