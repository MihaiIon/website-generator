// ====================================================
// Reducer / Navigation
// ====================================================

// Constants
import { APP_ACTION_TYPES, NAVIGATION_ACTION_TYPES } from "../actions/actions";

// Initial State
const initialState = {
  isShrinked: false,
  isOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATION_ACTION_TYPES.SHRINK:
      return {
        ...state,
        isShrinked: true
      };
    case NAVIGATION_ACTION_TYPES.ENLARGE:
      return {
        ...state,
        isShrinked: false
      };
    case NAVIGATION_ACTION_TYPES.OPEN:
      return {
        ...state,
        isOpen: true
      };
    case NAVIGATION_ACTION_TYPES.CLOSE:
    case APP_ACTION_TYPES.SET_CURRENT_PAGE_ID:
    case APP_ACTION_TYPES.SET_CURRENT_PAGE_ID_WITH_LOADING:
      return {
        ...state,
        isOpen: false
      };
    default:
      return state;
  }
};
