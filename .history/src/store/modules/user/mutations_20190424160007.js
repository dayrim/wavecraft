import { UPDATE_EMAIL, UPDATE_DISPLAYNAME, UPDATE_PASSWORD } from "./mutation-types";

export default {
  [UPDATE_EMAIL](state, payload) {
    state.email = payload;
  },
  [UPDATE_DISPLAYNAME](state, payload) {
    state.displayName = payload;
  },
  [UPDATE_PASSWORD](state, payload) {
    state.password = payload;
  },
};
