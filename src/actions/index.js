import tvmaze from '../apis/tvmaze';

export const fetchShows = () => {
    return async dispatch => {
        const response = await tvmaze.get('/search/shows', {
            params: {
                q: 'girls'
            }
        });
        dispatch({ type: 'FETCH_SHOWS', payload: response.data });
    };
};

export const selectShow = (show) => {
    return {
        type: "SHOW_SELECTED",
        payload: show
    };
};