<template>
  <div
    class="flex flex-col w-screen h-screen bg-skin-main justify-center items-center"
  >
    <ThemeSwitcher @setTheme="setTheme"/>
    <Numpad/>
  </div>
</template>

<script>
import ThemeSwitcher from "./components/ThemeSwitcher.vue";
import Numpad from "./components/Numpad.vue";

export default {
  name: "App",
  components: {
    Numpad,
    ThemeSwitcher,
  },
  data() {
    return {
      theme: 0,
    };
  },
  methods: {
    setTheme(index) {
      this.theme = index;
    },
  },
};
</script>

<style scoped>
</style>
