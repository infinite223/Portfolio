<script lang="ts" setup>
import FooterSection from '@/components/FooterSection.vue';
import HeaderSection from '@/components/HeaderSection.vue';
import ProjectsSectionVue from '@/components/ProjectsSection.vue';
import TechnologiesBaner from '@/components/TechnologiesBaner.vue';
import ContactSection from '@/components/ContactSection.vue';
import HobbySection from '@/components/HobbySection.vue';

</script>

<template>
    <div class="mainContainer">
        <HeaderSection/>
        <TechnologiesBaner/>
        <ProjectsSectionVue/>
        <HobbySection/>
        <ContactSection/>
        <FooterSection/>
    </div>
</template>

<style scoped lang="scss">
    .mainContainer {
        width: 100%;
    }
</style>