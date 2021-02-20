import UsersService from "../services";

export default {
  ActionFetchUsers({ commit }) {
    return UsersService.fetchUsers().then((res) => {
      commit("setUsers", res);
    });
  },

  ActionGetuser({ commit }, id) {
    return UsersService.getUser(id).then((res) => {
      commit("setUser", res);
    });
  },
};
