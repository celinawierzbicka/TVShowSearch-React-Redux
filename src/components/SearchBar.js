import React from 'react';
import { connect } from 'react-redux';
import { searchShows, fetchShows, emptyStringSearch } from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

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
        if (props.term) {
            props.fetchShows(props.term);
        } else {
            props.emptyStringSearch();
        }
    };
    let emptyStringNotification = "";
    if(props.emptyStringSearched) {
        emptyStringNotification = <Typography variant="caption" color="secondary">The search query can't be empty. Please enter TV Show title to search shows.</Typography>
    }

    return (
        <div className="search-bar">
            <form className={classes.root} noValidate autoComplete="off" onSubmit={onFormSubmit}>
                <Input placeholder="Enter TV Show title..." onChange={onInputChange} id="standard-basic" autoFocus={true} required={true} value={props.term}/>
                <Button type="submit" variant="contained" color="primary" onClick={onFormSubmit}>Search</Button>
             </form>
             {emptyStringNotification}
        </div>
    );
};

const mapStateToProps = (state) => {
    return { term: state.term.term, shows: state.shows.shows, emptyStringSearched: state.term.emptyStringSearch }
}

export default connect(mapStateToProps, { searchShows, fetchShows, emptyStringSearch })(SearchBar);
