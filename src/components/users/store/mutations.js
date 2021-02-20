export default {
  setUsers(state, data) {
    state.users = data;
  },

  setUser(state, data) {
    state.user = data;
  },

  deleteUser(state, data) {
    state.message = data;
  },

  insertUser(state, data) {
    state.message = data;
  },
};
