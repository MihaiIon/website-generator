// ======================================================
// Configure Store
// ======================================================

// Redux
import { createStore, applyMiddleware, compose } from "redux";

// Thunk
import thunk from "redux-thunk";

// Reducers
import rootReducer from "./reducers";

// Saga
import rootSaga from "./actions/sagas/rootSaga";
import sagaMiddleware from "./sagaMiddleware";

// Helpers
import { saveState } from "./_helpers/localStorage";

const middlewares = [];
middlewares.push(thunk);
middlewares.push(sagaMiddleware);

export default () => {
  let store;
  if (process.env.NODE_ENV === "development") {
    // Add support for Redux Dev Tools Extension.
    // https://github.com/zalmoxisus/redux-devtools-extension
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; /* eslint no-underscore-dangle: 0 */
    store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
  } else {
    store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));
  }

  sagaMiddleware.run(rootSaga);

  // Hot module replacement of reducers has to be explicit since redux v2.0.0
  // See release notes : https://github.com/reduxjs/react-redux/releases/tag/v2.0.0
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers");
      store.replaceReducer(nextRootReducer);
    });
  }

  // Persist current page id.
  store.subscribe(() => {
    saveState({
      currentPageId: store.getState().app.currentPageId
    });
  });

  return store;
};
