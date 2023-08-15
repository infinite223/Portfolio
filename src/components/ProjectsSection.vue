<script setup lang="ts">
    import { myProjects } from '../utils/projectsData'
    import ProjectItem from './ProjectItem.vue'
    import { useTheme } from '@/store';
    import { computed } from 'vue';
    import { Icon } from '@iconify/vue'

    const { theme } = useTheme()
</script>

<template>
    <div class="projectsSection">
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
                <div class="button">View code</div>
            </div>
        </nav>


        <div class="projectsList">
            <ProjectItem v-for="project in myProjects" :project-data="project"/>
        </div>
    </div>
</template>

<style lang="scss">
    .projectsSection {
        height: 100vh;
        width: 100%;
        // background-color: rgb(10, 10, 10);

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
            align-items: center;
            gap: 10px;
            margin: 20px -20px;
        }
    }
</style>