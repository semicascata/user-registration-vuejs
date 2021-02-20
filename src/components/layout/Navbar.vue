<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
    <div class="navbar-brand">
      <i class="fas fa-users"></i> User Registration | Job Challange
    </div>
    <!-- toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ml-auto">
        <router-link to="/" type="button" class="nav-link">Home</router-link>
        <router-link to="/users" type="button" class="nav-link"
          >Users</router-link
        >
        <router-link to="/contact" type="button" class="nav-link"
          >Contact</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped></style>
