// ====================================================
// Actions / Navigation
// ====================================================

// Constants
import { NAVIGATION_ACTION_TYPES } from "./actions";

// Actions
// ====================================================

export const shrink = () => ({
  type: NAVIGATION_ACTION_TYPES.SHRINK
});

export const enlarge = () => ({
  type: NAVIGATION_ACTION_TYPES.ENLARGE
});

export const open = () => ({
  type: NAVIGATION_ACTION_TYPES.OPEN
});

export const close = () => ({
  type: NAVIGATION_ACTION_TYPES.CLOSE
});
