<script setup lang="ts">
    import { useTheme } from '@/store'; 
    import { Icon } from '@iconify/vue'

    const { theme } = useTheme()
</script>

<template>
    <div class="contactSection" id="contact">
        <div class="headerText">
            Contact
        </div>

        <h2>
            If you are interested in working with me, write to me
        </h2>

        <div class="containerIcons">
            <a href="https://github.com/infinite223" target="_blank">
                <div class="containerIcon">
                    <Icon 
                        icon="mdi:github" class="icon" width="34px"
                    />
                    <div class="iconName">
                        Github
                    </div>
                </div>
            </a>

            <a href="https://www.facebook.com/dawid.szmigiel.75" target="_blank">
                <div class="containerIcon">
                    <Icon 
                        icon="mdi:facebook" class="icon" width="34px"
                    />
                    <div class="iconName">
                            Facebook
                    </div>
                </div>
            </a>
            <a href="https://www.instagram.com/infinitetw3rk/" target="_blank">
                <div class="containerIcon">
                    <Icon 
                        icon="mdi:instagram" class="icon" width="34px"
                    />
                    <div class="iconName">
                            Instagram
                    </div>
                </div>
            </a> 

            <a href="https://www.linkedin.com/in/dawid-szmigiel-7a7609167/" target="_blank">
                <div class="containerIcon">
                    <Icon 
                        icon="mdi:linkedin" class="icon" width="34px"
                    />
                    <div class="iconName">
                        linkedin
                    </div>
                </div>
            </a>
        </div>

        <a class="contact" href="mailto:dawidszmigiel9@gmail.com">
            Send me an email
        </a>
    </div>
</template>

<style lang="scss">
    .contactSection {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2 {
            font-size: 38px;
            color: white;
            margin: 0px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            line-height: 40px;
            letter-spacing: 1px;
            text-align: center;
            line-height: 47px;
            max-width: 70vw;

            @media (max-width: 480px) {
                max-width: 90vw;
                line-height: 40px;
                font-size: 30px;
            }
            @media (max-width: 350px) {
                line-height: 30px;
                font-size: 25px;
            }
        }

        .containerIcons {
            display: flex;
            align-items: center;
            margin-top: 10px;

            @media (max-width: 480px) {
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
            }

            .containerIcon {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 10px 20px;
                color: rgb(193, 193, 193);

                .iconName {
                }

                                    
                &:hover {
                    color: v-bind('theme.first');
                    color: white;
                    transition: .3s all ease-in-out;
                    cursor: pointer;
                }
            }
        }

        .contact {
            width: fit-content;
            margin: 25px 0;
            padding: 10px 20px;
            border: 1px solid white;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 17px;
            font-weight: 200;
            color: rgb(242, 242, 242);
            text-decoration: none;
            cursor: pointer;

            &:hover {
                border:1px solid rgb(87, 157, 242);
                transition: .3s all ease-in-out;
            }
        }

        a {
            color: rgb(190, 190, 190);
            text-decoration: none;
            margin: 5px 0;
            width: fit-content;
            outline: none;

            &:hover {
                color: rgb(87, 157, 242);
                transition: .3s all ease-in-out;
                cursor: pointer;
            }
        }
    }
</style>