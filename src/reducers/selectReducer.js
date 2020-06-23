const initialState = {
    selectedShow: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SELECT_SHOW':
            return { ...state, selectedShow: action.payload };
        default:
            return state;
    }
};