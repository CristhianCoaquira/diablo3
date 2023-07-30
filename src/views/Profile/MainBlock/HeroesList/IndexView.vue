<template>
  <div class="heroes-list border-top border-secondary mt-5 pt-5">
    <b-table
      dark
      hover
      small
      striped
      stacked="sm"
      :items="heroes"
      :fields="fields"
    >
      <template #cell(name)="data">
        <HeroIco :hero="data.item" />
      </template>
      <template #cell(class)="data">
        <HeroClassLevel
          :hero="{ classSlug: data.item.classSlug, level: data.item.level }"
        />
      </template>
      <template #cell(kills)="data">
        <span>{{ data.item.kills.elites | formatNumber }}</span>
      </template>
    </b-table>
  </div>
</template>

<script>
import HeroIco from "@/views/Profile/MainBlock/HeroesList/HeroIco.vue";
import HeroClassLevel from "@/views/Profile/MainBlock/HeroesList/HeroClassLevel.vue";
import { formatNumber } from "@/filters/numeral";

export default {
  name: "HeroesList",
  props: {
    heroes: {
      type: Array,
      required: true,
    },
  },
  components: {
    HeroIco,
    HeroClassLevel,
  },
  data() {
    return {
      fields: [
        {
          key: "name",
          label: "Name",
        },
        {
          key: "class",
          label: "Class",
          sortable: true,
        },
        {
          key: "kills",
          label: "Elite Kills",
          sortable: true,
        },
      ],
    };
  },
  filters: {
    formatNumber,
  },
};
</script>
