import React from 'react';
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

export default function NavBar() {
    const classes = useStyles();
    return(
        <AppBar position="static">
            <Toolbar>
                <Link component={RouterLink} to="/">
                    <Typography variant="h6" className={classes.title}>
                        TV Show Search
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}
