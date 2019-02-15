// ======================================================
// Reducers / Quickmenu
// ======================================================

// Constants
import { QUICKMENU_ACTION_TYPES } from "../actions/actions";

// Initial State
const initialState = {
  isOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case QUICKMENU_ACTION_TYPES.OPEN:
      return { isOpen: true };
    case QUICKMENU_ACTION_TYPES.CLOSE:
      return initialState;
    default:
      return state;
  }
};
