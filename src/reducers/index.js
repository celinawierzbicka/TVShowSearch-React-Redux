import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import fetchReducer from './fetchReducer';

export default combineReducers({
    term: searchReducer,
    shows: fetchReducer
});