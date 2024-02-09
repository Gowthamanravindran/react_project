export default (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_LIKES':
            state.likes = state.likes + 1;
            return state;
        case 'REMOVE_LIKES':
            state.likes = state.likes - 1;
            return state;
        default:
            return state

    }
}