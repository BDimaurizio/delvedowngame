<template>
  <q-btn @click="clicked()"> </q-btn>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  watch,
  reactive,
  ref,
  toRef,
} from "vue";
import ItemService from "src/services/ItemService.ts";

export default defineComponent({
  components: {},

  props: {},

  setup(props, context) {
    const clicked = function () {
      let item = ItemService.getTest();
      console.log(item);
    };

    return { clicked };
  },
});
</script>
