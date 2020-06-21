const initialState = {
    shows: [],
    filteredShows: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_SHOWS':
            return { ...state, shows: action.payload, filteredShows: action.payload };
        case 'FILTER_SHOWS':
            return { ...state, filteredShows: action.payload.length !== 0 ? action.payload : null };
        default:
            return state;
    }
};