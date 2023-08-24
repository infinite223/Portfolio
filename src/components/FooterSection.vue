<script lang="ts" setup>
import { useTheme } from '@/store';

    const { theme } = useTheme()

    const links = [
        {name: 'Facebook', value: ''},
        {name: 'Github', value: ''},
        {name: 'linkedin', value: ''},
        {name: 'Instagram', value: ''},
    ]
</script>

<template>
    <div class="footerSection">
      <div class="left">
        <div class="left__mainText">
            
        </div>
        <div class="grayText">
            Copyright © dawidszmigiel-portfolio.netlify.app
        </div>
      </div>
      <div class="links">
        <!-- <div class="link" v-for="link in links">{{ link.name }}</div> -->
      </div>
    </div>
</template>

<style scoped lang="scss">
    .footerSection {
        width: 100%;
        display: flex;
        // align-items: center;
        justify-content: space-between;
        border-top: 1px solid rgb(47, 47, 47);
        padding: 20px 0;

        .left {
            display: flex;
            flex-direction: column;
            max-width: 30%;
            gap: 10px;

            @media (max-width: 480px) {
                max-width: 70%;
            }


            .left__mainText {
                color: rgb(189, 189, 189);
                font-size: 14px;
            }

            .grayText {
                color: gray;
                font-size: 12px;
            }
        }

        .links {
            display: flex;
            flex-direction: column; 
            gap: 5px;

            .link {
                font-size: 13px;
                color: rgb(189, 189, 189);
                letter-spacing: 1px;

                &:hover {
                    color: v-bind('theme.first');
                    transition: .3s all ease-in-out;
                    cursor: pointer;
                }
            }
        }
    }
</style>