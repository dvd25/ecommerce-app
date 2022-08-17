import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './context/Context';
import Typography from '@mui/material/Typography';
import { useNavigate, NavLink } from 'react-router-dom'
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';



function Cart() {

    let navigate = useNavigate();//for navigation back to previous page
    const { cart, setCart } = useContext(CartContext) // use the global cart state
    const [total, setTotal] = useState(0); // for tracking total value of items

    let uniqueId = 0;

    useEffect(() => {
        setTotal(cart.reduce((previousValue, currentValue) => previousValue + (currentValue.price !== undefined ? currentValue.price : 5.99), 0));
    }, [cart])

    //  function handleDelete(c){
    //     // let data = cart.splice(cart.findIndex(item => item.title !== c.title), 1)
    //     // setCart([...data])
    //     // onClick={() => {setCart(cart.splice(cart.findIndex(item => item.title !== c.title), 1))(console.log(cart));}}
    //     // onClick={() => setCart(cart.filter(item => item.title !== c.title))}
    //     //setCart(cart.filter(item => item.title !== c.title))
    //  }

    return (
        <div>
            <Stack sx={{ margin: "0 auto" }} direction='column' alignItems='center' spacing={2}>
            <Typography variant="h3"> My Cart </Typography>
            <br />
            <div>
                {cart.length !== 0 ? <ol style={{ textAlign: 'left', listStylePosition: 'inside', width: '600px', margin: '0 auto' }}>
                    {cart.map((c) => (<li key={uniqueId++}> <ul>
                        <li>
                            Title: {c.title}
                        </li>
                        <li>
                            Price: ${c.price !== undefined ? c.price : "5.99"}
                        </li>
                    </ul>
                    
                        <Button color="error" onClick={() => setCart(cart.filter(item => item.title !== c.title))} > Remove </Button></li>))}
                    <Typography variant="h6"> Total: ${(total)} </Typography>
                </ol> : <div> Theres nothing in your cart yet.</div>}

            </div>
            <Stack  direction='row' alignItems='center' spacing={2}>     
                <Button sx={{Width:"150px"}} color="error" variant="contained" onClick={() => setCart([])}>Clear Cart</Button>
                <Button sx={{Width:"150px"}} component={NavLink} to="/checkout" variant="contained" color='success'>Checkout</Button>
            </Stack>    
                <Button sx={{Width:"150px"}} variant="outlined" onClick={() => navigate(-1)}> Return to previous page </Button>
            </Stack>
        </div >
    );
}

export default Cart;