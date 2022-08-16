import React from 'react';
import { Route, Routes } from 'react-router-dom'
import MuiNavBar from './MuiNavBar';
import Home from './Home';
import Shop from './Shop';
import Clothing from './Clothing'
import Movies from './Movies'
import Cart from './Cart'
import NotFound from './NotFound';
import './App.css'



function App() {
    return (
        <div className='App'>
            <MuiNavBar/>
            <Routes> 
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />}>
                    <Route path="clothing" element={<Clothing/>} />
                    <Route path="movies" element={<Movies/>} />
                    
                </Route>
                <Route path="cart" element={<Cart/>} />
                <Route path ="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;