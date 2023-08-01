<template>
  <div class="progress-time-played">
    <div class="d-flex justify-content-between">
      <h5 class="mb-0 font-weight-lighter">{{ heroTime.hero }}</h5>
      <span>
        <b-badge class="w-50p">{{ (heroTime.time * 100).toFixed(2) }}</b-badge>
      </span>
    </div>
    <b-progress :max="1" height="14px" class="mb-3 rounded-0">
      <b-progress-bar :value="heroTime.time" :class="classHeroBg">
        {{ heroTime.hero }}
      </b-progress-bar>
    </b-progress>
  </div>
</template>

<script>
// Custom validator
import { HeroData } from "@/utils/typeValidation";

export default {
  name: "TimePlayedHero",
  props: {
    heroTime: {
      type: HeroData,
      required: true,
    },
  },
  computed: {
    classHeroBg() {
      return `hero-bg-color-${this.heroTime.classSlug}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.progress-time-played {
  .w-50p {
    position: relative;
    width: 50px;
    bottom: -2px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .hero-bg-color-barbarian {
    background-color: #4e1c16;
  }
  .hero-bg-color-crusader {
    background-color: #795548;
  }
  .hero-bg-color-demon-hunter {
    background-color: #f44336;
  }
  .hero-bg-color-monk {
    background-color: #ff9800;
  }
  .hero-bg-color-necromancer {
    background-color: #00bcd4;
  }
  .hero-bg-color-witch-doctor {
    background-color: #8bc34a;
  }
  .hero-bg-color-wizard {
    background-color: #3f51b5;
  }
}
</style>
