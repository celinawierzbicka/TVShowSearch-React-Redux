const initialState = {
    shows: [],
    filteredShows: [],
    isSearched: false,
    filterWithNoSearchResults: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_SHOWS':
            return { ...state, shows: action.payload, filteredShows: action.payload, isSearched: true, filterWithNoSearchResults: false };
        case 'FILTER_SHOWS':
            return { ...state, filteredShows: action.payload.length !== 0 ? action.payload : null, filterWithNoSearchResults: false };
        case 'NO_SHOW_FILTER':
            return { ...state, filterWithNoSearchResults: true };
        default:
            return state;
    }
};