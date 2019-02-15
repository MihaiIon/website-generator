import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export function runSaga(saga) {
  return sagaMiddleware.run(saga);
}

export default sagaMiddleware;
