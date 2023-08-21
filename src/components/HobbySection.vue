<script setup lang="ts">
   import { useTheme } from '@/store';

    const { theme } = useTheme()
</script>

<template>
    <div class="hobbySection" id="hobby">
        <h3>
            My hobby
        </h3>
    </div>
</template>

<style lang="scss">
    .hobbySection {
        height: 100vh;
        width: 100%;
        
        h3 {
            font-size:14px;
            color: v-bind('theme.first');
            font-weight: 300;
        }
    }
</style>