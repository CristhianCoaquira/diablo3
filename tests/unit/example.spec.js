import { mount, createLocalVue } from "@vue/test-utils";

import HeaderBar from "@/components/Header/HeaderBar.vue";
import Vuex from "vuex";
import router from "@/router/index";
import store from "@/store/index";

import "@/plugins/index";
import "@/directives/index";

const localVue = createLocalVue();
localVue.use(Vuex);

const wrapper = mount(HeaderBar, {
  store,
  router,
  localVue,
});
const vm = wrapper.vm;
describe("Check view is loaded correctly", () => {
  test("Check header title is equal to enviorement variable", () => {
    expect(vm.title).toBe(process.env.VUE_APP_TITLE);
  });
});
