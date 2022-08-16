import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './context/Context';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';



function Cart() {

    let navigate = useNavigate();//for navigation back to previous page
    const { cart, setCart } = useContext(CartContext) // use the global cart state
    const [total, setTotal] = useState(0); // for tracking total value of items
    console.log(cart)

    let uniqueId = 1;

    useEffect(()=> {
        setTotal(cart.reduce((previousValue, currentValue)=> previousValue + (currentValue.price !== undefined?currentValue.price:5.99),0));
    }, [cart])

    return (
        <div>
            <Typography variant="h3"> My Cart </Typography>
            <br />
            <div>
                {cart.length !== 0 ? <ol style={{ textAlign: 'left', listStylePosition: 'inside', width: '600px', margin: '0 auto' }}>
                    {cart.map((c) => (<li key={uniqueId}> {uniqueId++}<ul>
                        <li>
                            Title: {c.title}
                        </li>
                        <li>
                            Price: ${c.price !== undefined ? c.price : "5.99"}
                        </li>
                    </ul> <Button color="error" onClick={() => setCart(cart.filter(item => item.title !== c.title))}> Remove </Button></li>))}
                    <Typography variant="h6"> Total: ${(total)} </Typography>
                </ol> : <div> Theres nothing in your cart yet.</div>}
                
            </div>
            <Button variant="outlined" onClick={() => navigate(-1)}> Return to previous page </Button>
        </div>
    );
}

export default Cart;