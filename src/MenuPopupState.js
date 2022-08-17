import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { NavLink } from 'react-router-dom';
import { useState, useContext } from 'react'
import { CartContext } from './context/Context';

export default function MenuPopupState() {

  const [buttonText, setButtonText] = useState('All Products')
  const { setFilterBy } = useContext(CartContext);

  function changeText(text) {
    setButtonText(text)
  }

  function changeFilter(text) {
    setFilterBy(text)
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button color="inherit" style={{ width: "150px" }} variant="contained" {...bindTrigger(popupState)}>
            {buttonText}
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem component={NavLink} to="clothing" onClick={() => { popupState.close(); changeText("All Products") }}>All Products</MenuItem>
            <MenuItem component={NavLink} to="movies" onClick={() => { popupState.close(); changeText("Anime") }}>Anime</MenuItem>
            <MenuItem component={NavLink} to="filtered" onClick={
              () => {
                popupState.close();
                changeText("Electronics");
                changeFilter("products/category/electronics")
              }
            }>Electronics</MenuItem>

            <MenuItem component={NavLink} to="filtered" onClick={
              () => {
                popupState.close();
                changeText("Jewelery");
                changeFilter("products/category/jewelery")
              }
            }>Jewelery</MenuItem>

            <MenuItem component={NavLink} to="filtered" onClick={
              () => {
                popupState.close();
                changeText("Men's Clothing");
                changeFilter("products/category/men's clothing")
              }
            }>Men's Clothing</MenuItem>

            <MenuItem component={NavLink} to="filtered" onClick={
              () => {
                popupState.close();
                changeText("Women's Clothing");
                changeFilter("products/category/women's clothing")
              }
            }>Women's Clothing</MenuItem>

          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
