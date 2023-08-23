<script setup lang="ts">
import { useTheme } from '@/store';
import CIrcleGradient from './CIrcleGradient.vue';
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
        }
    })

    
</script>

<template>
    <div class="selectRandomTheme" @click="() => setShowSelectRandomTheme(false)">
        <div class="selectRandomTheme__content" @click="(e) => e.stopPropagation()">
            <h2>
                Change 
                <span class="baseColor">Theme</span>
            </h2>

            <CIrcleGradient v-for="color in colors" :color="color"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .selectRandomTheme {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100vw;
        height: 100vh;

        z-index: 6;

        background-color: rgba(24, 24, 24, .7);

        display: flex;
        align-items: center;
        justify-content: center;

        .baseColor {
            color: v-bind('theme.first');
        }

        .selectRandomTheme__content {
            display: flex;
            justify-content: center;
            width:80%;
            height: 90%;
            background-color: black;

            h2 {
                font-size: 30px;
                color: rgb(246, 246, 246);
                margin: 30px 10px;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                line-height: 40px;
                letter-spacing: 1px;
                max-width: 70vw;
                text-align: center;
                line-height: 47px;
            }
        }
    }
</style>