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
            // height: auto;
        }

        display: flex;
        justify-content: space-between;
        flex-direction: column;

        img {
            position: absolute;

            z-index: 1;
            right: 10px;
            bottom: calc((100vh / 2) - 230px);
            opacity: .6;
            border: 1px solid v-bind('theme.first');
            height: 450px;
            // filter: hue-rotate(102deg);
            filter: grayscale(1);

            width:330px;

            border-radius: 50%;
            padding: 20px;
            // background-color: rgb(59, 59, 59);

            @media (max-width: 480px) {
                position: relative;
                height: 240px;
                border: 1px solid gray;
                width: 180px;
                border-radius: 50%;
                top: 70px;
                left: 0px;
                margin-bottom: 50px;
            }
        }

        .headerSection__main {
            z-index: 2;
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            text-align: center;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

            h1 {
                font-size: 80px;
                max-width: 60vw;
                
                @media (max-width: 380px) {
                    font-size: 60px;
                }
                @media (max-width: 580px) {
                    font-size: 50px;
                }
            }

            p {
                max-width: 60vw;
                font-size: 18px;
                font-weight: 300;

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