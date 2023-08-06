<script setup lang="ts">
    import { computed, ref, watchEffect } from 'vue'
    import { Icon } from '@iconify/vue'
    import { RouterView } from 'vue-router'
    import {useRoute} from 'vue-router'
    import { useTheme } from '@/store';
    const { theme } = useTheme()

    const route = useRoute()

    const colorTheme_first = (path:string) => {
      if(route.path===path){
        return `color: ${theme.value.first}`
      }
    }

    // watchEffect(() => {
    //     console.log(route.path)
    // })
    
</script>

<template>
  <div class="topNavigation">
    <nav>
        <!-- <router-link to="/" :class="(route.path==='/')?'class_if_is_true':'else_class'">Skills</router-link> -->
        <router-link 
          :style="colorTheme_first('/')" 
          class="link page-link" 
          to="/" 
        >
          About
        </router-link>
        <router-link 
          :style="colorTheme_first('/skills')" 
          class="link page-link" 
          to="/skills" 
        >
          Skills
        </router-link>
        <router-link 
          :style="colorTheme_first('/projects')" 
          class="link page-link" 
          to="/projects" 
        >
          Projects
        </router-link>
    </nav>

  </div>
</template>

<style scoped lang="scss">
.topNavigation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  z-index: 10;

  nav {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 20px;

    .page-link, .page-link:visited, .page-link:hover, .page-link:active, .page-link:focus {
    outline: 0 none !important;
    border: 0;
    }

    .link {
        font-size: 18px;
        color: rgb(180, 180, 180);
        text-decoration: none;
        font-weight: 600;
        border: none;

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
