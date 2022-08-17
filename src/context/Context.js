
import React, { createContext, useState} from 'react';

export const CartContext = createContext();

const Context = ({children}) => {
    const [cart, setCart] = useState([]);
    const [filterBy, setFilterBy] = useState('products');

    return <CartContext.Provider value ={{cart,setCart,filterBy,setFilterBy}}> {children}</CartContext.Provider>
    
}

export default Context;