<template>
  <div id="card-container">
    <div class="card">
      <img
        class="card-img-top"
        src="@/assets/images/user-avatar.png"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{{ user.name }}, {{ user.age }} years</h5>
        <p class="card-text">
          <strong>Birth</strong>: {{ user.birth }} <br />
          <strong>Registration At</strong>: {{ user.createdAt }}
        </p>
        <button
          type="submit"
          @click.prevent="deleteUser()"
          class="btn btn-danger"
        >
          Delete User
        </button>
      </div>
    </div>
    <div class="row">
      <router-link to="/users" type="button" class="btn btn-sm btn-info">
        <i class="fas fa-arrow-left"></i> Go Back
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "User",
  props: ["id"],
  mounted() {
    this.ActionGetUser(this.id);
  },
  computed: {
    ...mapState("users", ["user"]),
  },
  methods: {
    ...mapActions("users", ["ActionGetUser", "ActionDeleteUser"]),

    deleteUser() {
      this.ActionDeleteUser(this.id).then(() => {
        this.$router.push("/users");
      });
    },
  },
};
</script>

<style></style>
