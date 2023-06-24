<template>
  <div id="app">
    <load-layout v-if="isLoading">
      <base-loading />
    </load-layout>
    <MainLayout v-else />
  </div>
</template>
<script>
import LoadLayout from "./layouts/LoadLayout.vue";
import BaseLoading from "./components/BaseLoading.vue";
import MainLayout from "./layouts/MainLayout.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    LoadLayout,
    BaseLoading,
    MainLayout,
  },
  computed: {
    ...mapState("loading", {
      isLoading: "isLoading",
    }),
  },
};
</script>

<style lang="scss">
#app {
  padding: 60px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: #15202b;
}
</style>
