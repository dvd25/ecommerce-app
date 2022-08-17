import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography, AppBar, Toolbar, Button, CssBaseline } from '@material-ui/core'
import { Stack } from '@mui/material';
import useStyles from './styles';
import { CartContext } from './context/Context';
import {useContext} from 'react';

function MuiNavBar() {
    const classes = useStyles();
    const {cart} = useContext(CartContext)

    return (
        <>
        <CssBaseline />
        <AppBar position='relative'>
            <Toolbar>
                <Stack direction='row' spacing={2} sx={{ pr: 6 }} >
                    <Typography variant="h4"> LOGO </Typography>
                  
                </Stack>
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
                <Stack sx={{marginLeft: 'auto'}}direction='row' spacing={2}>
                    <Button className={classes.button} component={NavLink} to="/cart" color='inherit'><Typography variant="subtitle1">
                        CART ({cart.length})
                    </Typography></Button>
                </Stack>
            </Toolbar>
        </AppBar>
        </>

    );
}

export default MuiNavBar;