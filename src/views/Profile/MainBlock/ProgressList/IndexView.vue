<template>
  <div class="progression-bosses pt-4 mt-5 border-top">
    <h2 class="font-diablo mb-4">Progression</h2>
    <b-row>
      <b-col
        v-for="(val, key) in sortedActs"
        :key="key"
        class="col-12 col-md-2"
      >
        <div class="bg-dark rounded mb-2">
          <ProgressItem :act="{ actNum: key, value: val }" />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ProgressItem from "@/views/Profile/MainBlock/ProgressList/ProgressItem.vue";

export default {
  name: "ProgressBosses",
  components: {
    ProgressItem,
  },
  props: {
    acts: {
      type: Object,
      required: true,
    },
  },
  computed: {
    sortedActs() {
      return Object.keys(this.acts)
        .sort()
        .reduce((a, c) => {
          a[c] = this.acts[c];
          return a;
        }, {});
    },
  },
};
</script>

<style lang="scss">
.progression-bosses {
  .boss-img {
    display: block;
    .act {
      margin: 0 auto;
      width: 50px;
      height: 55px;
    }
  }
}
</style>
