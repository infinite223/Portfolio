<script lang="ts" setup>
    import { myTechnologies } from './../utils/projectsData'
</script>

<template>
    <div class="technologiesBaner">
        <h3>Technologies I use</h3>
        <p>Technologies that I use most often to create my projects</p>
        <div class="content">
            <div class="item" v-for="technology in myTechnologies">
                {{technology.name}}
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .technologiesBaner {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        padding: 100px 0;

        h3 {
            color: white;
            font-size: 22px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            margin-bottom: 5px;
        }

        p {
            font-size: 15px;
            color: gray;
            font-weight: 100;
        }

        .content{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 80vw;

            .item {
                border: 1px solid rgb(193, 193, 193);
                padding: 10px 20px;
                font-size: 17px;
                font-weight: 200;
                color: rgb(242, 242, 242);
            }
        }
    }
</style>