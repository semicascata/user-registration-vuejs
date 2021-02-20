<template>
  <div id="users-container">
    <h2>Users:</h2>

    <div class="row">
      <button
        class="btn btn-md btn-info"
        data-toggle="modal"
        data-target="#newUser"
      >
        New User
      </button>
    </div>

    <Loading v-if="loading" />

    <div v-if="users.length == 0" class="warning">
      <h2>No registered users today...</h2>
    </div>

    <ul v-else class="list-group" :key="user.id" v-for="user in users">
      <li
        @click.prevent="getUser(user.id)"
        type="button"
        class="list-group-item"
      >
        <i class="fas fa-user"></i> <strong>Name</strong>: {{ user.name }} -
        <strong>Age</strong>: {{ user.birth }}
        <span v-if="user.birth >= 60" class="badge badge-warning float-md-right"
          >Elderly</span
        >
        <span v-if="user.birth < 18" class="badge badge-danger float-md-right"
          >Under Age</span
        >
        <span
          v-if="user.birth > 18 && user.birth < 60"
          class="badge badge-info float-md-right"
          >Adult</span
        >
      </li>
    </ul>

    <!-- modal -->
    <UserModal />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Loading from "../../layout/Loading";
import UserModal from "./UserModal.vue";

export default {
  name: "Users",
  components: {
    Loading,
    UserModal,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.ActionFetchUsers().then(() => {
      this.loading = false;
    });
  },
  computed: {
    ...mapState("users", ["users"]),
  },
  methods: {
    ...mapActions("users", ["ActionFetchUsers"]),

    getUser(id) {
      this.$router.push(`/users/${id}`);
    },
  },
};
</script>
<style lang="scss"></style>
