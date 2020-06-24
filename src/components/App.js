import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FilterDay from './FilterDay';
import NavBar from './NavBar'
import ShowList from './ShowList';
import SearchBar from './SearchBar';
import ShowDetails from './ShowDetails';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import '../styles.css'

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const App = () => {
    return(
        <div>
            <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Route path="/" exact component={SearchBar} />
                    <Route path="/" exact component={FilterDay} />
                    <Route path="/" exact component={ShowList} />
                    <Route path="/show/:id" component={ShowDetails} />
                </div>
            </BrowserRouter>
            </MuiThemeProvider>
        </div>
    )
};

export default App;