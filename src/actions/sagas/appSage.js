// ======================================================
// Actions / Sagas / Application
// ======================================================

// Sagas
import { takeEvery, select, put } from "redux-saga/effects";

// Actions
import { setCurrentPageId, hideOverlay } from "../app";
import { APP_ACTION_TYPES } from "../actions";

// Helpers
import { getCurrentPageId } from "./_helpers/selectors";
import withLoading from "./_helpers/withLoading";

/**
 *
 * @param {*} action Redux action.
 */
function* setCurrentPageIdAsync(action) {
  const currentPageId = yield select(getCurrentPageId);
  if (currentPageId !== action.id) yield withLoading(() => setCurrentPageId(action.id));
  else yield put(hideOverlay());
}

/**
 * Watch for page changes.
 */
export function* watchSetCurrentPageId() {
  yield takeEvery(APP_ACTION_TYPES.SET_CURRENT_PAGE_ID_WITH_LOADING, setCurrentPageIdAsync);
}
