<template>
  <Testcomponent></Testcomponent>
</template>

<script>
import { defineComponent, getCurrentInstance } from "vue";
import { useRoute } from "vue-router";
import Testcomponent from "src/components/testcomponent.vue";

export default defineComponent({
  components: {
    Testcomponent,
  },
  setup(props, context) {
    return {};
  },
});
</script>
