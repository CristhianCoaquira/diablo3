<template>
  <div class="hero-name-level">
    <span> {{ classToName(hero.classSlug) }} </span>
    <span>·</span>
    <span class="text-monospace font-weight-bold"> {{ hero.level }} </span>
  </div>
</template>

<script>
import heroName from "@/mixins/heroName";
export default {
  name: "HeroNameLevel",
  mixins: [heroName],
  props: {
    hero: {
      type: Object,
      required: true,
    },
  },
};
</script>
