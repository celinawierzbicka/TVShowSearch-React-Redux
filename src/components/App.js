import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FilterDay from './FilterDay';
import NavBar from './NavBar'
import ShowCard from './ShowCard';
import SearchBarNew from './SearchBarNew';
import ShowDetails from './ShowDetails';

import '../styles.css'

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Route path="/" exact component={SearchBarNew} />
                    <Route path="/" exact component={FilterDay} />
                    <Route path="/" exact component={ShowCard} />
                    <Route path="/show/:id" component={ShowDetails} />
                </div>
            </BrowserRouter>
        </div>
    )
};

export default App;