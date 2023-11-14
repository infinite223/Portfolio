<script setup lang="ts">
    import { useTheme } from '@/store';
    import { Icon, listIcons } from '@iconify/vue'

    const { theme } = useTheme()
    console.log(listIcons('', 'mdi'));

</script>

<template>
    <div class="container">
        <div class="headerText" style="color: #f2f2f2;">What i offer?</div>

        <div class="servicesList">
            <div class="service">
                <h3>
                    Web applications
                </h3>
                <Icon :color="theme.first" icon="solar:laptop-line-duotone" class="icon" width="34px"/>

                <p>
                    Developing web applications offers tremendous potential 
                    for addressing a wide range of human problems and needs.
                </p>

                <div class="footer">
                    React, Vue
                </div>
            </div>
            <div class="service">
                <h3>
                    Mobile apps
                </h3>
                <Icon :color="theme.first" icon="bi:phone" class="icon" width="34px"/>

                <p>
                    Mobile applications have gained tremendous popularity recently,
                    and their creation brings immense satisfaction.
                </p>

                <div class="footer">
                    React Native, Expo 
                </div>
            </div>
            <div class="service">
                <h3>
                    Backend
                </h3>
                <Icon :color="theme.first" icon="ant-design:build-twotone" class="icon" width="34px"/>

                <p>
                    Backend is an important part of mobile or web application development
                </p>

                <div class="footer">
                    .Net Core, Entity framework, Firebase
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        width: 100%;
        min-height: 100vh;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2 {
            font-size: 25px;
            // text-align: left;
        }

        .servicesList {
            display: flex;
            // align-items: center;
            justify-content: center;
            width: 100%;
            margin: 20px 0;

            @media (max-width: 480px) {
                flex-direction: column;
                align-items: center;
            }

            gap: 20px;
            .service {
                padding: 20px;
                // height: 400px;
                width: 340px;
                background-color:rgb(23, 23, 23);
                color: white;

                h3 {
                    text-transform: uppercase;
                    font-size: 17px;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    font-weight: 700;
                }

                p {
                    // color: rgb(127, 127, 127);
                    font-size: 15px;
                    font-weight: 300;
                }

                .footer {
                    color: white;
                    max-width: 90%;
                    font-weight: 800;
                    font-size: 17px;
                }
            }

            .color-1 {
                background-color:rgb(23, 23, 23);
            }
            .color-2 {
                background-color:rgb(23, 23, 23);
            }
            .color-3 {
                background-color:rgb(23, 23, 23);
            }
        }
    }
</style> 