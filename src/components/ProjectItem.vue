<script setup lang="ts">
    import type { PropType } from 'vue'
    import type { Project } from '../utils/projectsData'
    import { useTheme } from '@/store';
    import { computed, ref, watchEffect } from 'vue';
    import { Icon } from '@iconify/vue'
    import carsdesignStart from '../assets/carsdesignStart.png';
    import kaban from '../assets/kaban_board_screen.png';
    import monkey from '../assets/monkey.png';
    import workSchedule from '../assets/workSchedule.png';
    import downloadSongs from '../assets/downloadSongs.png';

    const { theme } = useTheme()
    const showOptions = ref(false)

    watchEffect(() => {
        showOptions.value = false
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
                return `background-image: url( ${carsdesignStart})`;
            case 'kaban': 
                return `background-image: url( ${kaban})`;
            case 'monkey': 
                return `background-image: url( ${monkey})`;
            case 'workSchedule': 
                return `background-image: url( ${workSchedule})`;
            case 'downloadSongs': 
                return `background-image: url( ${downloadSongs})`;
            default:
                break;
        }
    })
    
</script>

<template>
    <div 
        class="projectItem" 
        :style="backgroundProjectImage"
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
        height: 600px;
        min-width: 450px;
        // background-color: rgb(28, 28, 28);
        background-color: rgb(18, 18, 18);

        background-image: var(--bgImage);

        padding: 0 20px;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: 0px 200px;

        .projectItem__options {
            background-color: rgba(16, 16, 16, .8);
            height: 600px;
            width: 450px;
            position: absolute;
            left: 0px;
            top: 0px;

            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 10px;

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
    }
</style>