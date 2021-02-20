import api from "../../helpers/api";
import moment from "moment";

class UsersService {
  // fetch users
  async fetchUsers() {
    return await api.get("/users").then((res) => {
      const users = res.data.map((user) => {
        return {
          name: user.name,
          birth: moment().diff(user.birth, "years", false),
        };
      });
      return users;
    });
  }

  // get single user by id
  async getUser(id) {
    return await api.get(`/users/${id}`).then((res) => {
      console.log(res.data);
      return res.data;
    });
  }
}

export default new UsersService();
