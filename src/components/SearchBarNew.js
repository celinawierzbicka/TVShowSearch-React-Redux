import React from 'react';
import { connect } from 'react-redux';
import { searchShows, fetchShows } from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));

const SearchBar = function(props) {
    const classes = useStyles();
    const onInputChange = event => {
        props.searchShows(event.target.value);
    };

    const onFormSubmit = event => {
        let buttons = document.querySelectorAll("#day");
        buttons.forEach(button => {button.className = "MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-outlinedSizeSmall MuiButton-sizeSmall"});
        event.preventDefault();
        props.fetchShows(props.term);
    };

    return (
        <div className="search-bar">
            <Router>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={onFormSubmit}>
                <Input placeholder="Enter TV Show title..." onChange={onInputChange} id="standard-basic" autoFocus="true" />
                <Button type="submit" variant="contained" color="primary" onClick={onFormSubmit}>Search</Button>
             </form>
            </Router>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { term: state.term.term, shows: state.shows.shows }
}

export default connect(mapStateToProps, { searchShows, fetchShows })(SearchBar);
