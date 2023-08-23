<script setup lang="ts">
  import { computed, ref, type PropType, watch, reactive } from 'vue'
  import { Icon } from '@iconify/vue'
  import { useTheme } from '../store/index';
  import gsap from 'gsap'
import { Draggable } from 'gsap/all';

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
  const number = ref(1)

  const tweened = reactive({
    number: 0
  })

  watch(number, (n) => {
    gsap.to(tweened, { duration: 0.5, number: Number(n) || 0 })
  })
    
  const tryChangeTheme = (color:IColorType) => {
    number.value = 40
    setTimeout(() => {
      number.value = 1

    }, 500)
    changeTheme(color)
  }

  const randomPosAndSize = computed(() => {
    const size = getRandomInt(80)+50
    const posX = getRandomInt(innerWidth * .7) + (innerWidth * .3 )/2
    const posY = getRandomInt(innerHeight * .7) + (innerHeight * .3 )/2
    
    return `
        width: ${size+'px'}; height: ${size+'px'}; left: ${posX+ 'px'}; top: ${posY+ 'px'};
        background: radial-gradient(circle, ${color.first} 0%, ${color.secend} 21%, rgba(15, 15, 15, 1) 85%,  rgba(21, 21, 21, .1) 100%);
        animation-delay:${getRandomInt(4)+'s'}:
        box-shadow: 0px 0px 68px 10px ${color.secend};
        -webkit-box-shadow: 0px 0px 68px 10px ${color.secend};
        -moz-box-shadow: 0px 0px 68px 10px${color.secend};
        `
  })


  const enter = (el:any) => {
    gsap.from(el, {
        duration: 1,
        scale:.5,
        opacity: 0,
    })
    gsap.to(el, {
        duration: 1,
        scale:1,
        y: 0,
        opacity: 1,
    })
    
  }
  
</script>

<template>
  <transition 
    appear 
    @enter="enter"
  >
    <div 
        @click="tryChangeTheme(color)" 
        class="circleGradient"
        :style="[`transform: scale(${number}); z-index: ${number}`, randomPosAndSize]"
    >
    </div>
  </transition>
</template>

<style scoped lang="scss">
    .circleGradient {
        position: fixed;
        z-index: 7;
        border-radius: 50%;

        // animation: pulse 5s infinite;
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
    .rotate-enter-active {
      animation: rotate 0.2s;
    }

    .rotate-leave-active {
      animation: rotate 0.2s reverse;
    }

    @keyframes scale {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(3);
      }
    }

</style>