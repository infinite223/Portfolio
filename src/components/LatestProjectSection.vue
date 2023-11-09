<script lang="ts" setup>
    import { useTheme } from '@/store';
    import scheduleApp from '../assets/scheduleApp.png'
import { Icon } from '@iconify/vue/dist/iconify.js';
    const { theme } = useTheme()

</script>

<template>
    <div class="latestProjectSection">
        <div class="headerText">Latest project</div>
        <div class="latestProjectSection__content">
            <img :src="scheduleApp" class="scheduleApp"/>

        </div>
        <div class="latestProjectSection__footer">
            <div class="footer__item">
                Mobile app
                <Icon 
                    icon="mdi:github" class="icon" width="24px"
                />
            </div>
            <div class="footer__item">
                Web app preview + download
                <Icon 
                    icon="mdi:link" class="icon" width="24px"
                />
            </div> 
            
            <div class="footer__item">
                Backend
                <Icon 
                    icon="mdi:github" class="icon" width="24px"
                />
            </div>   
        </div>
    </div>
</template>

<style scoped lang="scss">
    .latestProjectSection {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        height: 100vh;
        width: 100%;
        .latestProjectSection__content {
            margin-top: 30px;
            display: flex;
            .scheduleApp {
                width: 700px;

                @media (max-width: 480px) {
                    width: 95vw;
                }
            }
        }

        .latestProjectSection__footer {
            display: flex;
            align-items: center;
            justify-content: center;

            @media (max-width: 480px) {
                flex-direction: column;
            }

            gap: 20px;

            .footer__item {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 20px;
                background-color: rgba(144, 144, 144, 0.2);
                padding: 10px 25px;
                color: rgb(214, 214, 214);
                font-weight: 700;
                font-size: 15px;
                text-transform: uppercase;

                &:hover {
                    border: 1px solid v-bind('theme.first');
                    transition:  .3s all ease-in-out;
                    cursor: pointer;
                }
            }
        }
    }
</style>