<script lang="ts" setup>
    import { useTheme } from '@/store';
    import scheduleApp from '../assets/scheduleApp.png'
    import { Icon } from '@iconify/vue/dist/iconify.js';
    const { theme } = useTheme()

</script>

<template>
    <div class="latestProjectSection">
        <div style="color: rgb(202, 202, 202);" class="headerText">Latest project</div>
        <div class="latestProjectSection__content">
            <img :src="scheduleApp" class="scheduleApp"/>
            <div class="latestProjectSection__content-description">
                <div class="latestProjectSection__content-nav">
                    <Icon color="white" icon="bi:phone" class="icon" width="34px"/>

                    <h2>
                        ScheduleWork
                    </h2>
                </div>

                <p>
                    A mobile application for managing the work schedule of employees. It makes 
                    it easier to record employees in the work schedule. The application allows 
                    you to divide into groups, quickly view the next working days and other co-workers.
                </p>
            </div>
        </div>
        <div class="latestProjectSection__footer">
            <a 
                href="https://github.com/infinite223/Schedule-work-app"
                target="_blank"
                class="page-link" 
            >
                <div class="footer__item">
                    Mobile app
                    <Icon 
                        icon="mdi:github" class="icon" width="24px"
                    />
                </div>
            </a>
            <a 
                href="https://schedulework-preview.netlify.app/"
                target="_blank"
                class="page-link" 

            >
                <div class="footer__item">
                    Web app preview + download
                    <Icon 
                        icon="mdi:link" class="icon" width="24px"
                    />
                </div> 
            </a>
            <a 
                href="https://github.com/infinite223/Schedule-work"
                target="_blank"
                class="page-link" 
            >
                <div class="footer__item">
                    Backend
                    <Icon 
                        icon="mdi:github" class="icon" width="24px"
                    />
                </div>   
            </a>    
        </div>
    </div>
</template>

<style scoped lang="scss">
    .latestProjectSection {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color:rgb(23, 23, 23);
        
        // min-height: 100vh;
        width: min-content;
        margin: auto;
        border-radius: 5px;
        padding: 30px 30px;
        align-self: center;

        @media (max-width: 480px) {
            width: 100%;
            margin-bottom: 40px;
        }

        .page-link, .page-link:visited, .page-link:hover, .page-link:active, .page-link:focus {
            outline: 0 none !important;
            border: 0;
            text-decoration: none;
            border: none;
        }
        .latestProjectSection__content {
            margin-top: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 40px;

            @media (max-width: 480px) {
                width: 100%;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .scheduleApp {
                width: 700px;

                @media (max-width: 480px) {
                    width: 95%;
                    flex-direction: column;
                }
            }

            .latestProjectSection__content-description {
                display: flex;
                flex-direction: column;

                gap: 10px;
                padding: 20px;
                height: fit-content;
                width: 340px;
                // background-color:rgb(23, 23, 23);
                color: white;

                @media (max-width: 480px) {
                    align-items: center;
                    justify-content: center;
                }

                p {
                    font-size: 17px;
                    font-weight: 300;
                    color: rgb(187, 186, 186);

                    @media (max-width: 480px) {
                        text-align: center;
                    }
                }

                .latestProjectSection__content-nav {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-left: -5px;

                    h2 {
                        color: white;
                        font-size: 25px;
                        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                        font-weight: 700;
                        text-align: left;
                        margin: 10px 0px;
                    }
                }
            }
        }

        .latestProjectSection__footer {
            display: flex;
            align-items: center;
            justify-content: center;

            @media (max-width: 480px) {
                flex-direction: column;
                width: 280px;
            }

            gap: 20px;

            .footer__item {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 20px;
                border: 1px solid rgb(184, 184, 184);
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