<script lang="ts" setup>
    import FooterSection from '@/components/FooterSection.vue';
    import HeaderSection from '@/components/HeaderSection.vue';
    import ProjectsSectionVue from '@/components/ProjectsSection.vue';
    import TechnologiesBaner from '@/components/TechnologiesBaner.vue';
    import ContactSection from '@/components/ContactSection.vue';
    import HobbySection from '@/components/HobbySection.vue';
    import { useTheme } from '@/store';

    const { theme } = useTheme()

</script>

<template>
    <div class="mainContainer">
        <HeaderSection/>
        <TechnologiesBaner/>
        <ProjectsSectionVue/>
        <ContactSection/>
        <HobbySection/>
        <FooterSection/>
    </div>
</template>

<style lang="scss">
    .mainContainer {
        width: 100%;
    }

    .headerText {
        font-size:16px;
        color: v-bind('theme.first');
        font-weight: 300;
        padding: 10px 0px;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1px;
    }
</style>