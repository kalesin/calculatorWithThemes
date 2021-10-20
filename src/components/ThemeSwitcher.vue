<template>
  <div class="h-10 w-1/4 flex justify-between mb-4">
    <div class="text-text-display flex-grow h-full font-bold text-3xl spartan">
      calc
    </div>
    <div class="text-text-display font-bold text-md spartan mt-6 mr-4">THEME</div>
    <div class="h-full w-1/6 justify-center flex-col items-center">
      <div
        class="
          h-1/2
          justify-between
          flex
          text-text-display
          ml-2
          mr-2
          mb-1
          font-bold
          spartan
        "
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>

      <div
        class="
          bg-keypad
          h-3/5
          w-full
          rounded-xl
          flex
          justify-between
          items-center
        "
      >
        <div
          class="h-4 w-4 rounded-full"
          :class="{
            toggle: isActive == index,
            marginLeft: index == 0,
            marginRight: index == 2,
          }"
          @click="setActive(index)"
          v-for="(item, index) in [0, 1, 2]"
          :key="index"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      isActive: 0,
    };
  },
  methods: {
    setActive(index) {
      this.isActive = index;
      this.$emit("setTheme", index);
    },
  },
};
</script>

<style scoped>
.marginLeft {
  margin-left: 4px;
}
.marginRight {
  margin-right: 4px;
}
</style>
