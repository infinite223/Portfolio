<script setup lang="ts">
    import { RouterView } from 'vue-router'
    import {useRoute} from 'vue-router'

    const route = useRoute()
</script>

<template>
  <div class="mainSection">
    <nav>
        <router-link class="link" to="/" :class="{'active':route.path==='/'}">Skills</router-link>
        <router-link class="link" to="/projects" :class="{'active':route.path==='/projects'}">Projects</router-link>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.mainSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  nav {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;

    .link {
        font-size: 20px;
        color: rgb(180, 180, 180);
        text-decoration: none;

        &:hover {
            background-color: transparent;
            color: white;
        }
    }

    .active {
        color: var(--baseColor_1);
        font-weight: 700;
    }
  }

  
}

</style>
