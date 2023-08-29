<script setup lang="ts">
    import type { PropType } from 'vue'
    import type { Project } from '../utils/projectsData'
    import { useHoverTechProjects, useTheme } from '@/store';
    import { computed, ref, watchEffect } from 'vue';
    import { Icon } from '@iconify/vue'
    import carsdesignStart from '../assets/carsdesignStart.png';
    import kaban from '../assets/kaban_board_screen.png';
    import monkey from '../assets/monkey.png';
    import workSchedule from '../assets/workSchedule.png';
    import downloadSongs from '../assets/downloadSongs.png';
    import shoppingNotes from '../assets/shoppingNotes.png';
    import portfolio from '../assets/portfolio.png';

    const { theme } = useTheme()
    const showOptions = ref(false)
    const { hoverTechProjects }:any = useHoverTechProjects()
    const findProject = ref()
    
    watchEffect(() => {
        showOptions.value = false
        if(hoverTechProjects.value){
            findProject.value = hoverTechProjects.value.find((project:string) => project === projectData?.name)
            console.log(hoverTechProjects.value)
        }
    })

    const { projectData } = defineProps({
        projectData: {
            type: Object as PropType<Project>
        }
    })



    const handleMouse = (type:boolean) => {
        showOptions.value = type
        console.log(showOptions.value)
    }

    const backgroundProjectImage = computed(() => {
        switch (projectData?.image) {
            case 'carsdesignStart':
                return  carsdesignStart
            case 'kaban': 
                return kaban
            case 'monkey': 
                return monkey
            case 'workSchedule': 
                return workSchedule
            case 'downloadSongs': 
                return downloadSongs
            case 'shoppingNotes': 
                return shoppingNotes
            case 'portfolio': 
                return portfolio
            default:
                break;
        }
    })

    
</script>

<template>
    <div 
        class="projectItem" 
        :id="projectData?.name"
        :onmouseenter="() => handleMouse(true)"
        :onmouseleave="() => handleMouse(false)"
    >
        <nav>
            <h3>
                {{projectData?.name}}
            </h3>
            <Icon v-if="projectData?.type==='Web app'" :color="theme.first" icon="solar:laptop-line-duotone" class="icon" width="24px"/>
            <Icon v-if="projectData?.type==='Mobile app'" :color="theme.first" icon="bi:phone" class="icon" width="24px"/>
        </nav>

        <p>
            {{projectData?.description}}
        </p>

        <img class="image" :src="backgroundProjectImage"/>

        <transition 
            name="slide-right" mode="out-in"
            v-if="showOptions" 
        >
            <div class="projectItem__options" :class="{'opacity-01': !showOptions}">
                <a v-if="projectData?.links?.linkToLiveapp" target="_blank" :href="projectData?.links?.linkToLiveapp">
                    <div class="option">
                        <Icon icon="solar:link-outline" class="icon" width="24px"/>
                        Show project
                    </div>
                </a>
                <a target="_blank" :href="projectData?.links.linkToGithub">
                    <div class="option">
                        <Icon icon="mdi:github" class="icon" width="24px"/>
                        Browse files/code
                    </div>
                </a>
            </div>
        </transition>
    </div>
</template>

<style lang="scss">
    .opacity-0 {
        opacity: 0;
    }
    .projectItem {
        display: flex;
        flex-direction: column;
        position: relative;
        height: auto;
        min-width: 450px;
        background-color: v-bind('findProject?"rgba(34, 33, 33, 1)":"rgb(18, 18, 18)"');

        background-image: var(--bgImage);

        padding: 0 20px;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: 0px 200px;
        overflow: hidden;

        @media (max-width: 480px) {
            min-width: 90vw;
        }

        .projectItem__options {
            background-color: rgba(16, 16, 16, .8);
            height: 100%;
            width: 450px;
            position: absolute;
            left: 0px;
            top: 0px;

            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 10px;

            @media (max-width: 480px) {
                width: 100%;
            }

            .option {
                display: flex;
                align-items: center;
                gap: 15px;
                border: 1px solid rgb(200, 200, 200);
                color: white;
                padding: 10px 20px;
                font-size: 16px;

                &:hover {
                    border: 1px solid v-bind('theme.first');
                    transition:  .3s all ease-in-out;
                    cursor: pointer;
                }
            }

            a {
                text-decoration: none;
            }
        }

        nav {
            display: flex;
            justify-content: space-between;
        }

        h3 {
            color: white;
            font-size: 20px;
            font-weight: 900;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }
        
        p {
            font-size: 15px;
            color: rgb(188, 188, 188);
            margin-top: 0px;
        }

        .image {
            width: 100%;

            
            @media (max-width: 480px) {
                width: 120%;
                position: relative;
                left: -30px;
                bottom: -30px;
            }
        }
    }

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
    background-color: v-bind('theme.secend');
  }
}

/* Styl dla animacji "pulse" */
.pulse-animation {
  animation: pulse 0.5s;
}
</style>