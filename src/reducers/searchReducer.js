const initialState = {
    term: '',
    shows: [],
    show: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SEARCH_SHOWS':
            return { ...state, term: action.payload };
        case 'FETCH_SHOWS':
            return { ...state, shows: action.payload };
        default:
            return state;
    }
};