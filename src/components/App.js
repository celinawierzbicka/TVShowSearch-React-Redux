import React from 'react';
import SearchBar from './SearchBar';
import ShowList  from './ShowList';
import FilterDay from './FilterDay';

const App = () => {
    return(
        <div>
            <SearchBar />
            <FilterDay />
            <ShowList />
        </div>
    )
};

export default App;