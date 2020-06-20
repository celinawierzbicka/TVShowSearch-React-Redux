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
