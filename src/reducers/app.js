// ======================================================
// Reducers / App
// ======================================================

// Actions
import { APP_ACTION_TYPES, NAVIGATION_ACTION_TYPES } from "../actions/actions";

// Helpers-
import getConfiguration from "../_helpers/getConfiguration";
import { loadState } from "../_helpers/localStorage";

// Variables
const { pages } = getConfiguration().project;
const persistedState = loadState();
const persistedPageId = persistedState ? persistedState.currentPageId : null;

const initalState = {
  isCrop: false,
  isLoading: false,
  isOverlay: false,
  currentPageId: persistedPageId && persistedPageId < pages.length ? persistedPageId : 0
};

export default (state = initalState, action) => {
  switch (action.type) {
    case APP_ACTION_TYPES.SET_CURRENT_PAGE_ID:
      return {
        ...state,
        currentPageId: action.id,
        isCrop: true,
        isOverlay: false
      };
    case APP_ACTION_TYPES.SHOW_LOADING:
      return {
        ...state,
        isLoading: true,
        isOverlay: false
      };
    case APP_ACTION_TYPES.HIDE_LOADING:
      return {
        ...state,
        isLoading: false,
        isCrop: false
      };
    case NAVIGATION_ACTION_TYPES.OPEN:
      return {
        ...state,
        isOverlay: true
      };
    case NAVIGATION_ACTION_TYPES.CLOSE:
    case APP_ACTION_TYPES.HIDE_OVERLAY:
      return {
        ...state,
        isOverlay: false
      };
    default:
      return state;
  }
};
