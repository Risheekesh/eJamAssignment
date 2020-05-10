
const deploymentStore = (state = [], action: any) => {
    switch (action.type) {
        case 'ADD_DEPLOYMENT':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'LIST_DEPLOYMENT':
            return state.map((todo: any) =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        case 'DELETE_DEPLOYMENT':
            return state.map((todo: any) =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        default:
            return state
    }
}

export default deploymentStore;
