// import { createSelector } from "reselect";
//
// export const filtersSelector = state => state.filters;
// export const articlesSelector = state => state.articles.entities;
// export const articlesListSelector = createSelector(
//   articlesSelector,
//   articles => articles.valueSeq().toArray()
// );

export const articlesLoadingSelector = state => state.houses.isLoading;

// export const selectedSelector = state => filtersSelector(state).selected;
// export const dateRangeSelector = state => filtersSelector(state).dateRange;
//
// export const commentSelector = ({ comments }, { id }) => comments.get(id);
//
// export const filtratedArticlesSelector = createSelector(
//   articlesListSelector,
//   selectedSelector,
//   dateRangeSelector,
//   (articles, selected, dateRange) => {
//     console.log("---", "selector");
//     const { from, to } = dateRange;
//
//     return articles.filter(article => {
//       const published = Date.parse(article.date);
//       return (
//         (!selected.length ||
//           selected.find(selected => selected.value === article.id)) &&
//         (!from || !to || (published > from && published < to))
//       );
//     });
//   }
// );
