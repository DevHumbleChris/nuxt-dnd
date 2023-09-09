export const useTodosStore = defineStore('todosStore', () => {
    const isOpenAddTodoModal = useState<boolean>('isOpenAddTodoModal', () => false)

    const openTodoModal = (): void => {
        isOpenAddTodoModal.value = !isOpenAddTodoModal?.value
    }

    return {
        isOpenAddTodoModal,
        openTodoModal
    }
})