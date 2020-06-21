import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

export default function NavBar() {
    const classes = useStyles();
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                TV Show Search
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
