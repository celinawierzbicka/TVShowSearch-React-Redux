import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FilterDay from './FilterDay';
import NavBar from './NavBar'
import ShowList from './ShowList';
import SearchBar from './SearchBar';
import ShowDetails from './ShowDetails';

import '../styles.css'

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Route path="/" exact component={SearchBar} />
                    <Route path="/" exact component={FilterDay} />
                    <Route path="/" exact component={ShowList} />
                    <Route path="/show/:id" component={ShowDetails} />
                </div>
            </BrowserRouter>
        </div>
    )
};

export default App;