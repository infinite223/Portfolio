<script lang="ts" setup>
import { useTheme } from '@/store';
import { computed } from 'vue';
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import SelectRandomTheme  from './SelectRandomTheme.vue'

    const { theme } = useTheme()
    const links = [
        {name: 'Home', value: 'home'}, 
        {name: 'Technologies', value: 'technologies'},
        {name: 'My projects', value: 'projects'},
        {name: 'Hobby', value: 'hobby'},
        {name: 'Contact', value: 'contact'},
    ]
    
    const hoverColor = computed(() => {
        return `&hover`
    })

    const showSelectRandomTheme = ref(false)

    const setShowSelectRandomTheme = (type: boolean) => {
        showSelectRandomTheme.value = type
        console.log(type)
    }

    const scrollToSection = (sectionName: string)  => {
        const element: any = document.getElementById(sectionName);
        
        element.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<template>
    <nav>
        <div 
            @click="() => setShowSelectRandomTheme(true)"
            class="themeSelect" 
            :style="{backgroundColor:'lightgray'}"
        >
            <Icon :color="theme.first" icon="mdi:palette" class="icon" width="28px"/>

        </div>

        <div class="links__container">
            <div class="link" v-for="link in links" @click="() => scrollToSection(link.value)">
                {{link.name}}
            </div>
        </div>

        <div class="button" 
        >
            Best project
        </div>
        
        <SelectRandomTheme v-if="showSelectRandomTheme" :setShowSelectRandomTheme="setShowSelectRandomTheme"/>
    </nav>
</template>

<style scoped lang="scss">
    nav {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        background-color: black;
        padding: 20px 0;

        .themeSelect {
            position: relative;

            height: 20px;
            width: 20px;
            border-radius: 50%;
            color: white;

            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px dotted white;

            .icon {
                position: absolute;
                top: -10px;
                right: -10px;
            }
        }

        .links__container {
            display: flex;
            align-items: center;
            width: 800px;

            .link {
                color: rgb(161, 161, 161);
                padding: 10px;
                font-size: 15px;

                &:hover {
                    color: v-bind('theme.first');
                    transition: .3s all ease-in-out;
                    cursor: pointer;
                }
            }
        }
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
</style>