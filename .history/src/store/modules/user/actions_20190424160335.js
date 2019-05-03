import * as Mutate from "./mutation-types";

export const updateEmail = ({ commit }, payload) => {
  commit(Mutate.UPDATE_EMAIL, payload);
};
export const updateDisplayName = ({ commit }, payload) => {
  commit(Mutate.UPDATE_DISPLAYNAME, payload);
};

export default {
  updateEmail,
  updateDisplayName,
};
