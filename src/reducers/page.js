import { NEXT_PAGE, PREV_PAGE } from '../constants';

export default (page = 1, action) => {
  const { type } = action;

  switch (type) {
    case NEXT_PAGE:
      return page + 1;
    case PREV_PAGE:
      return page - 1;
    default:
      return page;
  }
};