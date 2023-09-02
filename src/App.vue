<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useTheme } from './store/index'
const { theme } = useTheme()

</script>

<template>
  <div class="app">
    <RouterView/>
  </div>

</template>

<style lang="scss">
:root {
  --baseColor_1: rgb(74, 207, 72);
  --baseColor_2: rgb(10, 208, 226);
  --baseColor_3: rgb(171, 5, 154);
  --baseColor_4: rgb(192, 176, 11);

  --baseColor_1_secend: rgb(11, 114, 9);
  --baseColor_2_secend: rgb(3, 111, 120);
  --baseColor_3_secend: rgb(98, 1, 88);
  --baseColor_4_secend: rgb(72, 67, 2);
}

.app {
  background-color: black;
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;

  overflow-y: auto;
  overflow-x: hidden;
}

a, button {
  &:focus, :active, ::after {
    text-decoration: none;
    outline: none;
  }
}

html {
  scroll-behavior: smooth;

}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #000000;
}

::-webkit-scrollbar-thumb {
  background: #575757;
}

::-webkit-scrollbar-thumb:hover {
  background: #000000;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
*:focus {
  outline: 3px dashed #228bec;
}
html {
  font: 62.5% / 1.15 sans-serif;
}
h1,
h2 {
  margin-bottom: 0;
}
ul {
  list-style: none;
  padding: 0;
}
button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  appearance: none;
}
button::-moz-focus-inner {
  border: 0;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  /* 1 */
  overflow: visible;
}
input[type="text"] {
  border-radius: 0;
}
body {
  width: 100%;
  margin: 0 auto;
  font:
    1.6rem/1.25 "Helvetica Neue",
    Helvetica,
    Arial,
    sans-serif;
  background-color: #f5f5f5;
  color: #4d4d4d;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
@media screen and (min-width: 620px) {
  body {
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
</style>
