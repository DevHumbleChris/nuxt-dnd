export const useTaskieStore = defineStore('taskieStore', () => {
    const isGetIconModalOpen = useState('isGetIconModalOpen', () => false)
    const isCreateProject = useState('isCreateProject', () => false)

    const setGetIconModalOpen = () => {
        isGetIconModalOpen.value = !isGetIconModalOpen.value
    }

    const setIsCreateProject = () => {
        isCreateProject.value = !isCreateProject?.value
    }

    return {
        isGetIconModalOpen,
        setGetIconModalOpen,
        setIsCreateProject,
        isCreateProject
    }
})