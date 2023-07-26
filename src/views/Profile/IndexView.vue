<template>
  <div>
    <BaseLoading v-if="isLoading" />
    <template v-if="profileData !== null">
      <MainBlock :profile-data="profileData" />
    </template>
  </div>
</template>

<script>
import { getApiAccount } from "@/api/search";
import setError from "@/mixins/setError";
import BaseLoading from "@/components/BaseLoading.vue";
import MainBlock from "@/views/Profile/MainBlock/IndexView.vue";

export default {
  mixins: [setError],
  components: {
    BaseLoading,
    MainBlock,
  },
  data() {
    return {
      isLoading: false,
      profileData: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.isLoading = true;
      const { region, battleTag: account } = this.$route.params;
      getApiAccount({ region, account })
        .then(({ data }) => {
          this.profileData = data;
        })
        .catch((err) => {
          this.profileData = null;

          const errObj = {
            routeParams: this.$route.params,
            message: err.message,
          };
          if (err.response) {
            errObj.data = err.response.data;
            errObj.status = err.response.status;
          }
          this.setApiErr(errObj);
          this.$router.push({ name: "Error" });
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>
