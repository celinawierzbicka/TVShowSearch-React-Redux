import React from 'react';
import { connect } from 'react-redux';
import { searchShows, fetchShows } from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));

const SimpleCard = function(props) {
    const classes = useStyles();
    const onInputChange = event => {
        console.log(event.target.value)
        props.searchShows(event.target.value);
    };

    const onFormSubmit = event => {
        console.log("on form submit fired")
        let buttons = document.querySelectorAll("#day");
        buttons.forEach(button => {button.className = "MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-outlinedSizeSmall MuiButton-sizeSmall"});
        event.preventDefault();
        props.fetchShows(props.term);
    };

    return (
        <div className="search-bar">
            <form className={classes.root} noValidate autoComplete="off" onSubmit={onFormSubmit}>
                <Input placeholder="Enter TV Show title..." onChange={onInputChange} id="standard-basic" />
                <Button type="submit" variant="contained" color="primary">Search</Button>
             </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { term: state.term.term, shows: state.shows.shows }
}

export default connect(mapStateToProps, { searchShows, fetchShows })(SimpleCard);
