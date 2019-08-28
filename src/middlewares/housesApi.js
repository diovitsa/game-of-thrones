import { ERROR, START, SUCCESS } from "../constants";
import { head } from 'lodash';
import { DataService } from '../services/DataService';

export default store => next => action => {
  const { housesAPICall, type, index, ...rest } = action;

  const isAlreadyLoaded = head([...store.getState().houses.housesList.filter((housesPage) => {
    return housesPage.index === store.getState().page;
  })]);

  if (!housesAPICall || isAlreadyLoaded) return next(action);

  store.dispatch({
    ...rest,
    type: type + START
  });


  DataService.getHousesList(index)
    .then(response => {
      store.dispatch({
        ...rest,
        response,
        index,
        type: type + SUCCESS
      })
    })
    .catch(error => {
      store.dispatch({
        ...rest,
        error,
        type: type + ERROR
      });
    });
};
