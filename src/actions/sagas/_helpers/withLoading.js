// ======================================================
// Actions / Sagas / With Loading
// ======================================================

// Sagas
import { put, call } from "redux-saga/effects";
import { delay } from "redux-saga";

// Actions
import { showLoading, hideLoading } from "../../app";

/**
 * Wraps a SAGA action between loading actions.
 * @param {function} action Redux Action
 */
export default function* withLoading(action) {
  yield put(showLoading());
  yield call(delay, 600);
  yield put(action());
  yield call(delay, 600);
  yield put(hideLoading());
}
