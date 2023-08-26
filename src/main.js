import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./assets/css/main.scss";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./plugins/index";
import "./directives/index";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  methods: {
    init() {
      store.dispatch("oauth/getToken", null, { root: true });
    },
  },
  created() {
    this.init();
  },
  render: (h) => h(App),
}).$mount("#app");
