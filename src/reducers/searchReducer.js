const initialState = {
    term: "",
    emptyStringSearch: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SEARCH_SHOWS':
            return { ...state, term: action.payload };
        case 'CLEAR_SEARCH_RESULTS':
            return { ...state, term: "", emptyStringSearch: false};
        case 'EMPTY_STRING_SEARCH':
            return { ...state, emptyStringSearch: true };
        case 'FETCH_SHOWS':
        return { ...state, emptyStringSearch: false };
        default:
            return state;
    }
};