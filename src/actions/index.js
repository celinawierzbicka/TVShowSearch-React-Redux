import tvmaze from '../apis/tvmaze';

export const searchShows = term => dispatch => {
    dispatch({ type: 'SEARCH_SHOWS', payload: term });
};

export const fetchShows = term => {
    return async dispatch => {
        const response = await tvmaze.get('/search/shows', {
            params: {
                q: term
            }
        });
        dispatch({ type: 'FETCH_SHOWS', payload: response.data });
    };
};

export const filterShows = (shows, day) => {
    let filteredShows = shows.filter(show => { return show.show.schedule.days.includes(day) });
    return { 
        type: 'FILTER_SHOWS', 
        payload: filteredShows
    };
};

export const selectShow = (shows, id) => {
    let selectedShow = shows.filter(show => { return show.show.id === id });
    return { 
        type: 'SELECT_SHOW', 
        payload: selectedShow
    };
};

export const noResultsToFilter = () => {
    return { 
        type: 'NO_SHOW_FILTER'
    };
};

export const allSearchResults = () => {
    return { 
        type: 'BACK_TO_SEARCH_RESULTS'
    };
};

export const clearSearchResults = () => {
    return { 
        type: 'CLEAR_SEARCH_RESULTS'
    };
};

export const emptyStringSearch = () => {
    return { 
        type: 'EMPTY_STRING_SEARCH'
    };
};