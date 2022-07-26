<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <Testpage />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import testpage from "src/pages/testpage.vue";
import Testpage from "src/pages/testpage.vue";

export default defineComponent({
  name: "MainLayout",

  components: { Testpage },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
