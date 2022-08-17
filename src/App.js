import React from 'react';
import { Route, Routes } from 'react-router-dom'
import MuiNavBar from './MuiNavBar';
import Home from './Home';
import Shop from './Shop';
import Movies from './Movies'
import Cart from './Cart'
import NotFound from './NotFound';
import './App.css'
import FilteredProducts from './FilteredShop';
import Checkout from './Checkout';



function App() {
    return (
        <div className='App'>
            <MuiNavBar/>
            <Routes> 
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />}>
                    <Route index element={<FilteredProducts/>}/>
                    <Route path="clothing" element={<FilteredProducts/>} />
                    <Route path="movies" element={<Movies/>} />
                    <Route path="filtered" element={<FilteredProducts/>} />
                    
                </Route>
                <Route path="cart" element={<Cart/>} />
                <Route path="checkout" element={<Checkout/>} />
                <Route path ="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;