import { NEXT_PAGE, PREV_PAGE } from '../constants';

export const nextPage = () => ({
  type: NEXT_PAGE,
});

export const prevPage = () => ({
  type: PREV_PAGE,
});
