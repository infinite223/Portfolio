<script setup lang="ts">
import { useTheme } from '@/store';
import CIrcleGradient from './CIrcleGradient.vue';
import { Icon } from '@iconify/vue'

const { theme } = useTheme()
const colors = [
    {first: 'var(--baseColor_1)', secend: 'var(--baseColor_1_secend)'},
    {first: 'var(--baseColor_2)', secend: 'var(--baseColor_2_secend)'},
    {first: 'var(--baseColor_3)', secend: 'var(--baseColor_3_secend)'},
    {first: 'var(--baseColor_4)', secend: 'var(--baseColor_4_secend)'}
  ]

    defineProps({
        setShowSelectRandomTheme: {
            type: Function,
            required: true
        },
        showSelectRandomThem: {
            type: Boolean,
            required: true
        }
    })

    
</script>

<template>
    <transition>
        <div v-if="showSelectRandomThem" class="selectRandomTheme" @click="() => setShowSelectRandomTheme(false)">
            <div class="selectRandomTheme__content" @click="(e) => e.stopPropagation()">
                <Icon :color="theme.first" icon="mdi:palette" class="icon" width="28px"/>

                <h2>
                    Change 
                    <span class="baseColor">Theme</span>
                </h2>

                <p>
                    Gradients have a random position each time
                </p>

                <button class="closeButton" @click="() => setShowSelectRandomTheme(false)">
                    Back to portfolio
                </button>

                <CIrcleGradient v-for="color in colors" :color="color"/>
            </div>
        </div>
    </transition>
</template>

<style scoped lang="scss">
    .selectRandomTheme {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100vw;
        height: 100vh;

        z-index: 6;

        background-color: rgba(0, 0, 0, 0.1);

        display: flex;
        align-items: center;
        justify-content: center;

        .baseColor {
            color: v-bind('theme.first');
        }

        .selectRandomTheme__content {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width:80%;
            height: 90%;
            background-color: black;
            border: 1px solid rgb(32, 32, 32);

            @media (max-width: 480px) {
                width:95%;
                height: 90%;
            }

            h2 {
                font-size: 30px;
                color: rgb(246, 246, 246);
                margin: 10px 10px;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                line-height: 40px;
                letter-spacing: 1px;
                max-width: 70vw;
                text-align: center;
                line-height: 47px;
            }
            p {
                color: rgb(170, 170, 170);
                font-size: 15px;
                margin: 0px;
            }

            .closeButton {
                padding: 10px 20px;
                border: 1px solid white;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                font-size: 17px;
                font-weight: 200;
                color: rgb(242, 242, 242);
                margin-top: 20px;
                cursor: pointer;
                z-index: 10;

                &:hover {
                    border:1px solid v-bind('theme.first');
                    transition: .3s all ease-in-out;
                }
            }
        }
    }
    .v-enter-active,
    .v-leave-active {
    transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
    opacity: 0;
    }
</style>