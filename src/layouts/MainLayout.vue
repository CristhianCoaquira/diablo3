<template>
  <div class="container">
    <HeaderBar></HeaderBar>
    <router-view />
    <FooterBar></FooterBar>
  </div>
</template>
<script>
import HeaderBar from "@/components/Header/HeaderBar.vue";
import FooterBar from "@/components/Footer/FooterBar.vue";
export default {
  name: "MainLayout",
  components: { HeaderBar, FooterBar },
};
</script>
