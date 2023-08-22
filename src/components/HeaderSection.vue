<script lang="ts" setup>
    import { useTheme } from '@/store';
    import MainNavigation from './MainNavigation.vue';
    import { Icon } from '@iconify/vue'

    const { theme } = useTheme()

</script>

<template>
    <div class="headerSection">
        <MainNavigation/>

        <div class="headerSection__main">
            <h1>Dawid Szmigiel</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, perferendis praesentium consequuntur quibusdam ipsa ipsam reprehenderit dolor eius suscipit! Porro, sapiente doloribus?</p>
        </div>
        
        <div class="icon__container">
            <Icon :color="theme.first" icon="iconoir:move-down" class="icon" width="28px"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .headerSection {
        width: 100%;
        height: 100vh;

        display: flex;
        justify-content: space-between;
        flex-direction: column;

        .headerSection__main {
            h1 {
                color: white;
                font-size: 80px;
                max-width: 60vw;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            }

            p {
                color: rgb(197, 197, 197);
                max-width: 60vw;
                font-size: 16px;
            }
        }

        .icon__container {
            height: 50px;
            display: flex;
            align-self: center;
            margin: 10px;
            .icon {
                animation: pulse 5s infinite;
            }   
        }

        @keyframes pulse {
        100% {  height: 50px; opacity: 1;}
        0%{   height: 0px; opacity: 1;}
        // 0% {   height: 50px; opacity: 1;}
    }
    }
</style>