<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/layout/Navbar";

export default {
  name: "App",
  components: { Navbar },
};
</script>
<style lang="scss" scoped></style>
