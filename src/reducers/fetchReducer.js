const initialState = {
    shows: [],
    filteredShows: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_SHOWS':
            console.log('fired fetch reducer')
            return { ...state, shows: action.payload, filteredShows: action.payload };
        case 'FILTER_SHOWS':
            console.log('fired filter reducer')
            return { ...state, filteredShows: action.payload.length !== 0 ? action.payload : null };
        default:
            return state;
    }
};