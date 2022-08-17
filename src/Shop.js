import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import {Typography} from '@material-ui/core'
import {Stack, Button} from '@mui/material';
import { CartContext } from './context/Context';
import {useContext} from 'react';
import MenuPopupState from './MenuPopupState';

function Shop(props) {
    const {cart,setCart} = useContext(CartContext)

    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    return (
        <div>
            <div> <Stack sx={{ pt: 4 }}direction="row"spacing={4} justifyContent="center"
                        > <Typography variant="h4"> Sort By: </Typography><MenuPopupState/>
                  </Stack>
            </div>
            <div style={{position: 'sticky', top: 0}}>
            <Stack sx={{ pt: 4 }} direction="row" spacing={4} justifyContent="center"> 
              <Button color="inherit" variant="contained" onClick={()=>topFunction()}>Back To Top</Button>
              <Button component={NavLink} to={'/cart'} variant="contained">Go To Cart ({cart.length})</Button>
              <Button color="error" variant="contained" onClick={()=>setCart([])}>Clear Cart</Button>
              
            </Stack>
            </div>
            <Outlet />
        </div>
    );
}

export default Shop;