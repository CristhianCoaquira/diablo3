<template>
  <div class="hello">
    <b-button>{{ msg }}</b-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
