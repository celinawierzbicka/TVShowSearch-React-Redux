import { combineReducers } from 'redux';
import showsReducer from './showsReducer';

// const showsReducer = (shows=[]) => {
//     return [
//         {title: 'No Scrubs', duration: '4:05'},
//         {title: 'Macarena', duration: '2:30'},
//         {title: 'All Star', duration: '3:15'},
//         {title: 'I want it that way', duration: '1:45'}
//     ];
// };

// const selectedShowReducer = (selectedShow = null, action) => {
//     if (action.type === 'SHOW_SELECTED') {
//         return action.payload;
//     }

//     return selectedShow;
// };

export default combineReducers({
    shows: showsReducer,
    // selectedShow: selectedShowReducer
});