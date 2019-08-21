import { head } from 'lodash';

export const housesSelector = state => {
  return head([...state.houses.housesList.filter((housesPage) => {
    return housesPage.index === state.page;
  })]);
};

export const articlesLoadingSelector = state => state.houses.isLoading;
