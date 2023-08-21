<script setup lang="ts">
    import { myProjects } from '../utils/projectsData'
    import ProjectItem from './ProjectItem.vue'
    import { useTheme } from '@/store';
    import { computed, ref } from 'vue';
    import { Icon } from '@iconify/vue'
    const selectedProject = ref(3)
    const lastUsed = ref(true)
    const { theme } = useTheme()

    const scrollByValue = (type: boolean) => {
        if (type && selectedProject.value !== myProjects.length) {
            if (lastUsed.value) {
                selectedProject.value = selectedProject.value + 1;
            } else {
                selectedProject.value = selectedProject.value + 3;
            }
            lastUsed.value = true;
        } else if (!type && selectedProject.value !== 1) {
            if (lastUsed.value) {
                selectedProject.value = selectedProject.value - 3;
            } else {
                selectedProject.value = selectedProject.value - 1;
            }
            lastUsed.value = false;
        }

        const element: any = document.getElementById(myProjects[selectedProject.value - 1].name);
        
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    };
</script>

<template>
    <div class="projectsSection" id="projects">
        <nav>
            <div class="left">
                <h3>
                    My projects
                </h3>
                <h2>
                    Selected works <br/> 2021 - 2023
                </h2>
            </div>
            <div class="right">
                <div>See my projects on github</div>
                <a class="button" href="https://github.com/infinite223?tab=repositories">View code</a>
            </div>
        </nav>

        <div class="projectsList" id="projectsList">
            <button class="arrowIcon left" @click="() => scrollByValue(false)">{{"<"}}</button>
            <ProjectItem v-for="project in myProjects" :project-data="project"/>
            <button class="arrowIcon right" @click="() => scrollByValue( true)">{{">"}}</button>
        </div>
    </div>
</template>

<style lang="scss">
    .projectsSection {
        height: auto;
        width: 100%;
        position: relative;

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            .left {
                h2 {
                    font-size: 40px;
                    color: white;
                    margin: 0px;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    line-height: 40px;
                    letter-spacing: 1px;
                }
                h3 {
                    font-size:14px;
                    color: v-bind('theme.first');
                    font-weight: 300;
                }
            }

            .right {
                display: flex;
                flex-direction: column;
                gap: 10px;

                color: rgb(190, 190, 190);
                font-size: 15px;

                .button {
                    padding: 10px 20px;
                    border: 1px solid white;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    font-size: 17px;
                    font-weight: 200;
                    color: rgb(242, 242, 242);
                    text-decoration: none;
                    cursor: pointer;

                    &:hover {
                        border:1px solid v-bind('theme.first');
                        transition: .3s all ease-in-out;
                    }
                }
            }
        }
        
        .projectsList {
            display: flex;
            gap: 10px;
            margin: 20px -20px;
            width: 100vw;
            max-height: 640px;

            overflow-x: scroll;

            &::-webkit-scrollbar{
                width: 0px;
                height: 10px;
            }
            &::-webkit-scrollbar-track{
                background-color: black;
            }
            &::-webkit-scrollbar-thumb{
                background-color: rgb(56, 56, 56);
                background: linear-gradient(90deg, rgb(81, 81, 81) 0%, rgba(0,0,0,1) 50%);
            }

            .arrowIcon {
                position: absolute;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: rgb(12, 12, 12);
                color: white;
                bottom: 300px;
                border: 1px solid white;
                z-index: 1;
                // .page-link, .page-link:visited, .page-link:hover, .page-link:active, .page-link:focus {            
            }

            button:focus, button:active, button:hover  {
                border:none;
                outline: 1px solid  v-bind('theme.first');;
            }   

            .left {
                left: 0px;
            }

            .right {
                right: 0px;
            }
        }
    }
</style>