<script lang="ts" setup>

</script>

<template>
    <div class="technologiesBaner">
        <h3>Technologies I use</h3>
        <p>Technologies that I use most often to create my projects</p>
        <div class="content">
            <div class="item">React</div>
            <div class="item">React Native</div>
            <div class="item">Vue</div>
            <div class="item">Redux</div>
            <div class="item">Scss</div>
            <div class="item">firebase</div>
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