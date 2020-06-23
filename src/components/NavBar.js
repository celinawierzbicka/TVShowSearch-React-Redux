import React from 'react';
import { connect } from 'react-redux';
import { clearSearchResults } from '../actions';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },

    title: {
        flexGrow: 1,
        color: "white",
    }
}));

const NavBar = (props) => {
    const classes = useStyles();
    const onGoToHomePage = () => {
        props.clearSearchResults();
        let buttons = document.querySelectorAll("#day");
        buttons.forEach(button => {button.className = "MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-outlinedSizeSmall MuiButton-sizeSmall"});
    }
    return(
        <AppBar position="static">
            <Toolbar>
                <Link component={RouterLink} to="/" onClick={onGoToHomePage}>
                    <Typography variant="h6" className={classes.title}>
                        TV Show Search
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = (state) => {
    return { selectedShow: state.selectedShow.selectedShow[0] }
}

export default connect(mapStateToProps, {clearSearchResults})(NavBar);
