import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import fetchReducer from './fetchReducer';
import selectReducer from './selectReducer';

export default combineReducers({
    term: searchReducer,
    shows: fetchReducer,
    selectedShow: selectReducer
});