const initialState = {
    term: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SEARCH_SHOWS':
            return { ...state, term: action.payload };
        default:
            return state;
    }
};