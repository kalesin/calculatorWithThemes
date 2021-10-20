<template>
  <div
    class="
      mt-4
      mb-4
      p-4
      h-1/6
      w-1/4
      bg-screen
      rounded-xl
      flex flex-col
      justify-start
      items-end
      text-text-display
      font-bold
      text-4xl
      spartan
    "
  >
    <div>{{ inputDisplay }}</div>
    <div class="ml-2 mr-2">{{ operation }}</div>
    <div>{{ inputDisplay2 }}</div>
  </div>

  <div class="h-1/2 w-1/4 bg-keypad rounded-xl p-6">
    <div class="h-full w-full flex flex-wrap gap-4 justify-between">
      <button
        @click="button(key)"
        class="key spartan"
        v-for="(key, index) in keys"
        :key="index"
        :class="{
          keyColor1: index != 3,
          keyColor2: index == 3 || index == 16,
          keyColor3: index == 17,
        }"
      >
        {{ key }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keys: [
        "7",
        "8",
        "9",
        "DEL",
        "4",
        "5",
        "6",
        "+",
        "1",
        "2",
        "3",
        "-",
        ".",
        "0",
        "/",
        "x",
        "RESET",
        "=",
      ],
      input: ["0"],
      input2: [],
      operation: "",
    };
  },
  computed: {
    inputNum() {
      return this.input.length != 0 ? parseFloat(this.input.join("")) : "";
    },
    inputNum2() {
      console.log(this.input2.join(""));
      return this.input2.length != 0 ? parseFloat(this.input2.join("")) : "";
    },
    inputDisplay() {
      let arr = JSON.parse(JSON.stringify(this.input.reverse()));
      console.log(arr);
      for (let i = 0; i < arr.length; i++) {
        if ((i+1) % 4 == 0) {
          arr.splice(i, 0, ",");
        }
      }
      return arr.reverse().join("");
    },
    inputDisplay2() {
      let arr = JSON.parse(JSON.stringify(this.input2.reverse()));
      console.log(arr);
      for (let i = 0; i < arr.length; i++) {
        if ((i+1) % 4 == 0) {
          arr.splice(i, 0, ",");
        }
      }
      return arr.reverse().join("");
    },
  },
  methods: {
    button(key) {
      //delete, reset, equals
      if (key == "DEL") {
        if (this.input2.length > 0) {
          this.input2.pop();
        } else {
          this.input.pop();
          if (this.input.length == 0) {
            this.input = ["0"];
          }
        }
      } else if (key == "RESET") {
        this.input = ["0"];
        this.input2 = [];
        this.operation = "";
      } else if (key == "=") {
        if (this.operation != "") {
          if (this.operation == "+") {
            this.input = this.inputNum + this.inputNum2;
            console.log("result", this.input);
          } else if (this.operation == "-") {
            this.input = this.inputNum - this.inputNum2;
          } else if (this.operation == "x") {
            this.input = this.inputNum * this.inputNum2;
          } else if (this.operation == "/") {
            this.input = this.inputNum / this.inputNum2;
          }
          console.log("result", this.input);
          this.input = this.input.toString().split("");
          this.input2 = [];
          this.operation = "";
        }
        //decimal points
      } else if (key == ".") {
        if (this.input2.length == 0) {
          if (this.input.length < 15 && !this.input.includes(".")) {
            this.input.push(key);
          }
        } else {
          if (this.input2.length < 15 && !this.input2.includes(".")) {
            this.input2.push(key);
          }
        }
      }
      //numbers
      if (this.operation == "") {
        if (key.match(/[0-9]/g) && this.input.length < 15) {
          if (this.input.length == 1 && this.input[0] == "0") {
            this.input.pop();
          }
          this.input.push(key);
        } else if (key.match(/\+|\-|\/|x/g)) {
          this.operation = key.match(/\+|\-|\/|x/g)[0];
        }
      } else {
        if (key.match(/[0-9]/g) && this.input2.length < 15) {
          if (this.input2.length == 1 && this.input2[0] == "0") {
            this.input2.pop();
          }
          this.input2.push(key);
        } else if (key.match(/\+|\-|\/|x/g)) {
          this.operation = key.match(/\+|\-|\/|x/g)[0];
        }
      }
    },
  },
};
</script>

<style scoped>
</style>
