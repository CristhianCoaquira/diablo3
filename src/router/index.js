import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routerOptions = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/region/:region/profile/:battleTag",
    name: "Profile",
  },
  {
    path: "/region/:region/profile/:battleTag/hero/:heroId",
    name: "Hero",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/error",
    name: "Error",
  },
  {
    path: "*",
    redirect: { name: "Home" },
  },
];

const routes = routerOptions.map((r) => {
  return {
    ...r,
    component: () =>
      import(
        /* webpackChunkName: "[request]" */ `@/views/${r.name}/IndexView.vue`
      ),
  };
});

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
