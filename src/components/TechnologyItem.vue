<script lang="ts" setup>
import { ref, type PropType } from 'vue';
import { useTheme, useHoverTechProjects } from '@/store';
import { myProjects } from '@/utils/projectsData';

    const { theme } = useTheme()
    const { setHoverTechProjects } = useHoverTechProjects()
    const isHover = ref(false)
    const projectsList = ref<string[]>([])
    const props = defineProps({
        technology: {
            type: Object as PropType<{id: number, name: string, icon:string}>,
            required: true
        }
    })

    const handleMouse = (type: boolean) => {
        isHover.value = type
        let _projectsList: string[] = [] 
        myProjects.forEach((project) => {
            const findProjectInGlobalData = project.technologies.find((tech) => tech.id === props.technology.id)
            const findProjectInState = _projectsList.find((tech) => tech === props.technology.name)

            if(findProjectInGlobalData && !findProjectInState){
                _projectsList.push(project.name)
            }
        })

        projectsList.value = _projectsList

        if(type) {
            setHoverTechProjects(_projectsList)
        }
        else {
            setHoverTechProjects([])
        }
    }

</script>
    
<template>
    <div 
        class="technologyItem" 
        :onmouseenter="() => handleMouse(true)"
        :onmouseleave="() => handleMouse(false)"
    >
        {{props.technology?.name}}

        <transition>
            <div v-if="isHover" class="projectsList">
                <h3>Projects in which I used 
                    <span>{{props.technology?.name}}</span>
                </h3>
                <div v-for="project in projectsList" class="project">
                    {{project}}
                </div>
            </div>
        </transition>
    </div>
</template>

<style scoped lang="scss">
    .technologyItem {
        position: relative;
        border: 1px solid rgb(193, 193, 193);
        padding: 10px 20px;
        font-size: 17px;
        font-weight: 200;
        color: rgb(242, 242, 242);

        &:hover {
            cursor: pointer;
        }

        .projectsList {
            position: absolute;
            padding: 10px 20px;
            background-color: rgb(19, 19, 19);
            z-index: 4;
            width: 250px;
            top: 30px;
            right: -120px;

            h3 {
                span {
                    color: v-bind('theme.first');
                }
            }

            .project {
                color: white;
                color: rgb(189, 189, 189);
            }
        }
    }

</style>