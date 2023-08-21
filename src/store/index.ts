import { ref } from 'vue'

const theme = ref({first: 'var(--baseColor_1)', secend: 'var(--baseColor_1_secend)'}); // <=== outside of function scope

export function useTheme() {
  const changeTheme = (color: {first:string, secend: string}) => {
    console.log(theme)
    theme.value = color
  };

  return { theme, changeTheme };
}
const hoverTechProjects = ref<string[]>([])

export function useHoverTechProjects() {
  const setHoverTechProjects = (projects: string[]) => {
    hoverTechProjects.value = projects
  };

  return { hoverTechProjects, setHoverTechProjects };
}