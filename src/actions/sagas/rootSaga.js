// ======================================================
// Actions / Sagas / Root Saga
// ======================================================

import { all } from "redux-saga/effects";

// Generators
import { watchSetCurrentPageId } from "./appSage";

export default function* rootSaga() {
  yield all([watchSetCurrentPageId()]);
}
