import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography, AppBar, Toolbar, Button, CssBaseline } from '@material-ui/core'
import { Stack } from '@mui/material';
import BrowseButton from './BrowseButton'
import useStyles from './styles';

function MuiNavBar() {
    const classes = useStyles();

    return (
        <>
        <CssBaseline />
        <AppBar position='static'>
            <Toolbar>

                <Stack direction='row' spacing={2}>
                    <Button className={classes.button} component={NavLink} to="/" color='inherit'><Typography variant="subtitle1">
                        HOME
                    </Typography></Button>
                    <Button className={classes.button} component={NavLink} to="/shop" color='inherit'><Typography variant="subtitle1">
                        SHOP
                    </Typography></Button>
                    <Button className={classes.button} component={NavLink} to="/login" color='inherit'><Typography variant="subtitle1">
                        SIGN IN
                    </Typography></Button>
                </Stack>
            </Toolbar>
        </AppBar>
        </>

    );
}

export default MuiNavBar;