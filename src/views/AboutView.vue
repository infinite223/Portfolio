<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

</script>

<template>
  <div class="about">
    <div class="about__main">
      <h1>Dawid Szmigiel</h1>
      <h2>Junior Frontend developer</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi quisquam sint cumque illo, pariatur maxime at nobis, incidunt saepe sed totam recusandae nulla iusto animi ratione magni itaque numquam.
      </p>

      <div class="about__location">
        <Icon icon="material-symbols:location-on" color="var(--baseColor_1)" class="icon" width="16px"/>
        <div class="about__location-place">Polska, Opole</div>
      </div>
    </div>

    <div class="about__bestProject">

    </div>
  </div>
</template>

<style scoped lang="scss">
.about {
  display: flex;
  text-align: left;
  justify-content: space-between;

  .about__main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 100vh;
    
    h1 {
      color: white;
      font-weight: 600;
      font-size: 34px;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    h2 {
      color: var(--baseColor_1);
      font-size: 20px;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 1px;
    }

    p {
      color: rgb(212, 212, 212);
      font-size: 16px;
      margin-top: 20px;
    }

    h1, h2, p, .about__location {
      z-index: 2;
    }
    .about__location {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-top: 10px;
      .about__location-place {
        font-weight: 600;
        font-size: 13px;
        color: rgb(203, 203, 203);
      }
    }
  }

  .about__bestProject {
    position: fixed;
    left: 0px;
    top: 300px;
    width: 50%;
    height: 60vh;
    z-index: 1;
    background: radial-gradient(circle, rgb(4, 143, 34) 0%, rgb(6, 86, 58) 5%, rgb(21, 21, 21) 40%, rgb(21, 21, 21)  100%);
    &:hover {
      transform:    scale(.8);
      transition: .5s all ease-in-out;
      cursor: pointer;
    }
  }
}

</style>
