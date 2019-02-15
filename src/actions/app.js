// ======================================================
// Actions / App
// ======================================================

// Constants
import { APP_ACTION_TYPES } from "./actions";

// Actions
// ======================================================

export const setCurrentPageId = id => ({
  type: APP_ACTION_TYPES.SET_CURRENT_PAGE_ID,
  id
});

export const setCurrentPageIdWithLoading = id => ({
  type: APP_ACTION_TYPES.SET_CURRENT_PAGE_ID_WITH_LOADING,
  id
});

export const hideOverlay = () => ({
  type: APP_ACTION_TYPES.HIDE_OVERLAY
});

export const showLoading = () => ({
  type: APP_ACTION_TYPES.SHOW_LOADING
});

export const hideLoading = () => ({
  type: APP_ACTION_TYPES.HIDE_LOADING
});
