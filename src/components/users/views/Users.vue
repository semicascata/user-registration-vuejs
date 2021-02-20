<template>
  <div>
    <h1>Users</h1>
    <div>
      <Loading v-if="loading" />

      <div v-else :key="user.id" v-for="user in users">
        <li>{{ user.name }}</li>
        <li>{{ user.birth }} years</li>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Loading from "../../layout/Loading";

export default {
  name: "Users",
  components: {
    Loading,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.ActionFetchUsers();
      this.loading = false;
    }, 800);
  },
  computed: {
    ...mapState("users", ["users"]),
  },
  methods: {
    ...mapActions("users", ["ActionFetchUsers"]),
  },
};
</script>
<style lang="scss" scoped></style>
