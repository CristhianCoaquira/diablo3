<template>
  <div class="skills-wrapper mt-5">
    <h2 class="font-diablo">Skills</h2>
    <hr class="bg-white" />

    <b-nav pills small>
      <b-nav-item
        :active="!isPassiveSkillsActive"
        @click="changeComponent('ActiveSkills')"
        >Active</b-nav-item
      >
      <b-nav-item
        :active="isPassiveSkillsActive"
        @click="changeComponent('PassiveSkills')"
        >Passive</b-nav-item
      >
    </b-nav>
    <keep-alive>
      <component :is="activeComponent" :skills="componentProps" />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "HeroSkills",
  components: {
    ActiveSkills: () =>
      import(/* webpackChunkName: "ActiveSkills" */ "./ActiveSkills.vue"),
    PassiveSkills: () =>
      import(/* webpackChunkName: "PassiveSkills" */ "./PassiveSkills.vue"),
  },
  props: {
    skills: {
      required: true,
      type: Object,
    },
  },
  computed: {
    componentProps() {
      return this.activeComponent === "ActiveSkills"
        ? this.skills.active
        : this.skills.passive;
    },
    isPassiveSkillsActive() {
      return this.activeComponent === "PassiveSkills";
    },
  },
  data() {
    return {
      activeComponent: "ActiveSkills",
    };
  },
  methods: {
    changeComponent(component) {
      this.activeComponent = component;
    },
  },
};
</script>
