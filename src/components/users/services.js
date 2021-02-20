import api from "../../helpers/api";
import moment from "moment";

class UsersService {
  // fetch users
  async fetchUsers() {
    return await api.get("/users").then((res) => {
      const users = res.data
        .sort(
          (a, b) =>
            moment().diff(a.birth, "years", false) -
            moment().diff(b.birth, "years", false)
        )
        .map((user) => {
          return {
            id: user.id,
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
      return {
        id: res.data.id,
        name: res.data.name,
        birth: moment(res.data.birth)
          .format("MMM Do YYYY"),
        age: moment().diff(res.data.birth, "years", false),
        createdAt: moment(res.data.createdAt)
          .subtract(3, "hours")
          .format("MMMM Do YYYY, h:mm:ss A"),
      };
    });
  }

  // delete user by id
  async deleteUser(id) {
    return await api.delete(`/users/${id}`);
  }

  // insert new user
  async insertUser(data) {
    console.log(data);
    return await api.post("/users/", {
      name: data.name,
      birth: data.birth,
    });
  }
}

export default new UsersService();
