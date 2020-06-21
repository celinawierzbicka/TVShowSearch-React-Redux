import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import SearchBar from './SearchBar';
// import ShowList  from './ShowList';
import FilterDay from './FilterDay';
import NavBar from './NavBar'
import ShowCard from './ShowCard';
import SearchBarNew from './SearchBarNew';
import ShowDetails from './ShowDetails';

import '../styles.css'

const App = () => {
    return(
        <div>
            <NavBar />
            {/* <SearchBar /> */}
            <SearchBarNew />
            <FilterDay />
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={ShowCard} />
                    <Route path="/:id" component={ShowDetails} />
                </div>
            </BrowserRouter>
            <ShowCard />
            {/* <ShowList /> */}
        </div>
    )
};

export default App;