import { head } from 'lodash';

export const housesSelector = state => {
  return head([...state.houses.housesList.filter((housesPage) => {
    return housesPage.index === state.page;
  })]);
};
export const charactersSelector = (state, ownProps) => {
  return head(state.characters.charactersList.filter(charactersBlock => {
    return charactersBlock.id === ownProps.house.name;
  }));
};
export const articlesLoadingSelector = state => state.houses.isLoading;
