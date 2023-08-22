<script setup lang="ts">
    import { useTheme } from '@/store'; 

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

        <a class="contact" href="mailto:dawidszmigiel9@gmail.com">
            Send me an email
        </a>
        <!-- <a href="mailto:dawidszmigiel9@gmail.com">DawidSzmigiel9@gmail.com</a> -->
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
            font-size: 40px;
            color: white;
            margin: 0px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            line-height: 40px;
            letter-spacing: 1px;
            text-align: center;
            line-height: 47px;
            max-width: 70vw;
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