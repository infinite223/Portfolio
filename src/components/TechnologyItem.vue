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

    const handleMouse = (type: boolean, project:string | null) => {
        isHover.value = type

        if(project) {
            if(type){
                setHoverTechProjects([project])
            }
            else {
                setHoverTechProjects([])
            }
        }
        else {
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


    }

    const navigateTo = (project:string) => {
        const element: any = document.getElementById(project);
        
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
        
        setTimeout(() => {
            setHoverTechProjects([project])
        }, 500)
        setTimeout(() => {
            element.classList.add('pulse-animation');
            element.addEventListener('animationend', () => {
                element.classList.remove('pulse-animation');
            });
        }, 600)
        setTimeout(() => {
            setHoverTechProjects([])
        }, 3000)
    }

</script>
    
<template>
    <div 
        class="technologyItem" 
        :onmouseenter="() => handleMouse(true, null)"
        :onmouseleave="() => handleMouse(false, null)"
    >
        {{props.technology?.name}}

        <transition>
            <div 
                v-if="isHover" class="projectsList"
            >
                <h3>Projects in which I used 
                    <span>{{props.technology?.name}}</span>
                </h3>
                <p>Click on the project name to see it</p>
                <div 
                    v-for="project in projectsList" 
                    class="project"
                    @click="() => navigateTo(project)"
                    :onmouseenter="() => handleMouse(true, project)"
                    :onmouseleave="() => handleMouse(true, project)"
                >
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
                margin-bottom: 6px;

                span {
                    color: v-bind('theme.first');
                }
            }

            p {
                color: rgb(182, 182, 182);
                margin: 3px 0;
                margin-bottom: 10px;
                font-size: 12px;
            }

            .project {
                color: rgb(189, 189, 189);

                &:hover {
                    color: white; 
                }
            }
        }
    }

    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.2s ease-in-out;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }

</style>