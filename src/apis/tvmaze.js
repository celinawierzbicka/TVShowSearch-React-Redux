import axios from 'axios';

export default axios.create({
    baseURL: 'http://api.tvmaze.com/'
});