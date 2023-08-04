<script setup lang="ts">
  import { computed, ref, type PropType, watch, reactive } from 'vue'
  import { Icon } from '@iconify/vue'
  import { useTheme } from '../store/index';
  import gsap from 'gsap'

  function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }
  
  interface IColorType {
    first:string,
    secend:string
  }

  const { color } = defineProps({
    color: {
        required:true,
        type: Object as PropType<IColorType>,
    }
  })

  const { theme, changeTheme } = useTheme()
  
  const number = ref(0)
    const tweened = reactive({
    number: 0
    })

    watch(number, (n) => {
        gsap.to(tweened, { duration: 0.5, number: Number(n) || 0 })
    })
  
  const tryChangeTheme = (color:IColorType) => {
    console.log('dsad')
    changeTheme(color)
  }
  console.log(color)
  const randomPosAndSize = computed(() => {
    const size = getRandomInt(250)+50
    const posX = getRandomInt(innerWidth)
    const posY = getRandomInt(innerHeight)
    
    return `
        width: ${size+'px'}; height: ${size+'px'}; left: ${posX+ 'px'}; top: ${posY+ 'px'};
        background: radial-gradient(circle, ${color.first} 0%, ${color.secend} 5%,  rgb(31, 31, 31) 80%,  rgb(21, 21, 21) 100%);
        animation-delay:${getRandomInt(4)+'s'}
        `
  })
</script>

<template>
    <div 
        @click="tryChangeTheme(color)" 
        class="circleGradient"
        :style="randomPosAndSize"
    >

    </div>
</template>

<style scoped lang="scss">
    .circleGradient {
        position: fixed;

        border-radius: 50%;
        animation: pulse 5s infinite;
        z-index: 1;
        &:hover {
            transform: scale(1.1);
            transition: .6s all ease-in-out;
            cursor: pointer;
        }
    }

    @keyframes pulse {
        100% {  transform: scale(1.1);}
        50%{  transform: scale(.9);}
        0% {  transform: scale(1.1);}
    }
</style>