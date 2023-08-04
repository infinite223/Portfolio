<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { Icon } from '@iconify/vue'
  import { useTheme } from '../store/index';
import CIrcleGradient from '@/components/CIrcleGradient.vue';

  const { theme, changeTheme } = useTheme()
  
  const colorTheme_first = computed(() => {
    return `color: ${theme.value.first}`
  })

  const colorTheme_secend = computed(() => {
    return `color: ${theme.value.secend}`
  })

  const colors = [
    {first: 'var(--baseColor_1)', secend: 'var(--baseColor_1_secend)'},
    {first: 'var(--baseColor_2)', secend: 'var(--baseColor_2_secend)'},
    {first: 'var(--baseColor_3)', secend: 'var(--baseColor_3_secend)'},
    {first: 'var(--baseColor_4)', secend: 'var(--baseColor_4_secend)'}
  ]


</script>

<template>
  <div class="about">
    <CIrcleGradient v-for="color in colors" :color="color"/>

    <div class="about__main">
      <h1>Dawid Szmigiel</h1>
      <h2 :style="colorTheme_first">Junior Frontend developer</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi quisquam sint cumque illo, pariatur maxime at nobis, incidunt saepe sed totam recusandae nulla iusto animi ratione magni itaque numquam.
      </p>

      <div class="about__location">
        <Icon :color="theme.secend" icon="material-symbols:location-on" class="icon" width="16px"/>
        <div class="about__location-place">Polska, Opole</div>
      </div>
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

  }
}

</style>
