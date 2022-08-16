import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {NavLink} from 'react-router-dom';
import {useState} from 'react'

export default function MenuPopupState() {

  const [buttonText, setButtonText] = useState('Category')

  function changeText(text){
    setButtonText(text)
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button color ="inherit" style={{width: "150px"}}variant="contained" {...bindTrigger(popupState)}>
            {buttonText}
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem component={NavLink} to="clothing" onClick={()=>{popupState.close();changeText("Clothing")}}>Clothing</MenuItem>
            <MenuItem component={NavLink} to="movies" onClick={()=>{popupState.close();changeText("Movies")}}>Anime</MenuItem>
            <MenuItem onClick={()=>{popupState.close();changeText("test")}}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
