import { UPDATE_EMAIL, UPDATE_DISPLAYNAME } from "./mutation-types";

export default {
  [UPDATE_EMAIL](state, payload) {
    state.email = payload;
  },
  [UPDATE_DISPLAYNAME](state, payload) {
    state.displayName = payload;
  },
};
