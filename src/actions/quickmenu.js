// ======================================================
// Actions / Quickmenu
// ======================================================

// Constants
import { QUICKMENU_ACTION_TYPES } from "./actions";

// Actions
// ======================================================

export const open = () => ({
  type: QUICKMENU_ACTION_TYPES.OPEN
});

export const close = () => ({
  type: QUICKMENU_ACTION_TYPES.CLOSE
});
