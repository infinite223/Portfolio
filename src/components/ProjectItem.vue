<script setup lang="ts">
    import type { PropType } from 'vue'
    import type { Project } from '../utils/projectsData'

    defineProps({
        projectData: {
            type: Object as PropType<Project>
        }
    })
</script>

<template>
    <div class="projectItem">
        <h3>
            {{projectData?.name}}
        </h3>

    </div>
</template>

<style lang="scss">
    .projectItem {
        height: 400px;
        width: 250px;
        background-color: rgb(28, 28, 28);
        border-radius: 5px;
        padding: 0 20px;

        h3 {
            color: white;
            font-size: 20px;
            font-weight: 400;
        }
        
        h2 {
            
        }
    }
</style>