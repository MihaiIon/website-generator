import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// Components
import app from "./app";
import navigation from "./navigation";
import quickmenu from "./quickmenu";

// Modules
// NONE

const rootReducer = combineReducers({
  app,
  navigation,
  quickmenu,
  routing: routerReducer
});

export default rootReducer;
