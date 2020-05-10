
const deploymentStore = (state = [], action: any) => {
    switch (action.type) {
        case 'ADD_DEPLOYMENT':
            return state;
        case 'LIST_DEPLOYMENT':
            return state;
        case 'DELETE_DEPLOYMENT':
            return StaticRange;
        default:
            return state
    }
}

export default deploymentStore;
