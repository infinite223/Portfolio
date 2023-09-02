<script lang="ts" setup>
    import { useTheme } from '@/store';
    import MainNavigation from './MainNavigation.vue';
    import { Icon } from '@iconify/vue'
    import me from './../assets/me.png'
    const { theme } = useTheme()

</script>

<template>
    <div class="headerSection">
        <MainNavigation/>
        <img :src="me"/>

        <div class="headerSection__main">
            <h1>Dawid Szmigiel</h1>
            <p>
                Currently, I'm in my final year of computer science studies and I'm looking for additional work. Take a look at my portfolio, 
                and if you're interested in collaboration, feel free to get in touch.
            </p>
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

        @media (max-width: 480px) {
            height: auto;
        }

        display: flex;
        justify-content: space-between;
        flex-direction: column;

        img {
            position: absolute;
            width: 40vw;
            z-index: 1;
            right: 0;
            opacity: .5;

            @media (max-width: 480px) {
                position: relative;
                height: 230px;
                border: 1px solid gray;
                width: 200px;
                border-radius: 50%;
                top: 70px;
                left: 0px;
                margin-bottom: 50px;
            }
        }

        .headerSection__main {
            z-index: 2;
            h1 {
                color: white;
                font-size: 80px;
                max-width: 60vw;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                
                @media (max-width: 380px) {
                    font-size: 60px;
                }
            }

            p {
                color: rgb(197, 197, 197);
                max-width: 60vw;
                font-size: 18px;

                @media (max-width: 480px) {
                    max-width: 90%;
                }
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
    }
    }
</style>