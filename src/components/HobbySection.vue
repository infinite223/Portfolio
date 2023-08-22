<script setup lang="ts">
   import { useTheme } from '@/store';
   import { Icon } from '@iconify/vue'

    const { theme } = useTheme()
</script>

<template>
    <div class="hobbySection" id="hobby">
        <div class="headerText">
            My hobby
        </div>
        <h4>
            I try to combine my interests with programming.
        </h4>
        <h2>
            Currently, programming is my biggest hobby, but besides it, I'm also very interested in car tuning, photography, and AI.
        </h2>

        <div class="iconsContainer">
            <Icon icon="eos-icons:ai" class="icon" width="34px"/>
            <Icon icon="mdi:car-outline" class="icon" width="34px"/>
            <Icon icon="fa:photo" class="icon" width="34px"/>
        </div>
    </div>
</template>

<style lang="scss">
    .hobbySection {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h2 {
        font-size: 40px;
        color: rgb(246, 246, 246);
        margin: 10px;
        margin-bottom: 30px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        line-height: 40px;
        letter-spacing: 1px;
        max-width: 70vw;
        text-align: center;
        line-height: 47px;
    }
    
    h4 {
        margin: 0px;
        color: rgb(162, 162, 162);
        letter-spacing: 2px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    .iconsContainer {
        display: flex;
        align-items: center;
        gap: 15px;
    }
</style>