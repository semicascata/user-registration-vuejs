import UsersService from "../services";

export default {
  ActionFetchUsers({ commit }) {
    return UsersService.fetchUsers().then((res) => {
      commit("setUsers", res);
    });
  },

  ActionGetUser({ commit }, id) {
    return UsersService.getUser(id).then((res) => {
      commit("setUser", res);
    });
  },

  ActionDeleteUser({ commit }, id) {
    return UsersService.deleteUser(id).then((res) => {
      commit("deleteUser", res.data.message);
    });
  },

  ActionNewUser({ commit }, data) {
    return UsersService.insertUser(data)
      .then((res) => {
        commit("insertUser", res.data.message);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        commit("insertUser", "Failed to register user");
      });
  },
};
