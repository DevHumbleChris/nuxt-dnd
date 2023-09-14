export const useTaskieStore = defineStore('taskieStore', () => {
    const isGetIconModalOpen = useState('isGetIconModalOpen', () => false)

    const setGetIconModalOpen = () => {
        isGetIconModalOpen.value = !isGetIconModalOpen.value
    }

    return {
        isGetIconModalOpen,
        setGetIconModalOpen
    }
})