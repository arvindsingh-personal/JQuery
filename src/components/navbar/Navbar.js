import React, { useState } from 'react'
import { AppBar, styled, Toolbar, Box, Typography, InputBase, Menu, MenuItem } from "@mui/material";
import { Facebook, Instagram, Menu as MenuIcon, Twitter } from '@mui/icons-material/';
import { Link, NavLink } from 'react-router-dom';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Home from '../home/Home';




export default function Navbar() {

  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',

  })
  const SocialBox = styled(Box)({
    display: 'flex'
  }); 
  const MenuBox = styled(Box)({
    display: 'flex',
    gap: 30
  })
  const SearchBox = styled(Box)({
    display: 'flex'
  })
  const StyledLink = styled(Link)`
     color:white;
     text-decoration:none;
     &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration:none;
     }
  `
  const StyledLink1 = styled(Link)`
     color:black;
     text-decoration:none;
     &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration:none;
     }
  `

  const [open, setOpen] = useState(false);

  return (
    <AppBar sx={{ background: 'black', position: 'static' }}>
      <StyledToolbar>
        <SocialBox>
          <Facebook sx={{m:1}} />
          <Instagram sx={{m:1}} />
          <Twitter sx={{m:1}} />
        </SocialBox>
        <MenuBox sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
          {/* {MenuItems.map((item) => (
            <Typography sx={{ cursor: 'pointer', fontSize: '14px' }}>{item.Name}</Typography>
          ))} */}
          <StyledLink to='/' element={<Home />} >Home</StyledLink>
          <StyledLink to='/' element={<Home />} >Search</StyledLink>
          <StyledLink to='/' element={<Home />} >Contact Us</StyledLink>
          <StyledLink to='/' element={<Home />} >About Us</StyledLink>
          <StyledLink to='/' element={<Home />} >Profile</StyledLink>
        </MenuBox>
        <SearchBox>
          <InputBase placeholder='Search...' sx={{ color: 'white' }} />
          <MenuIcon sx={{ cursor: 'pointer', display: { xs: 'block', sm: 'block', md: 'none' } }} onClick={() => { setOpen(!open) }} />
        </SearchBox>
        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
          <StyledLink to='/AddBLog'>Add Your Blog <BorderColorIcon/></StyledLink>
        </Box>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => { setOpen(!open) }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box display={"block"} sx={{ width: 200, height: '60vh' }}>

          <MenuItem onClick={() => { setOpen(!open) }}><StyledLink1 to='/' element={<Home />} >Home</StyledLink1></MenuItem>
          <MenuItem onClick={() => { setOpen(!open) }}><StyledLink1 to='/' element={<Home />} >Search</StyledLink1></MenuItem>
          <MenuItem onClick={() => { setOpen(!open) }}><StyledLink1 to='/' element={<Home />} >Contact Us</StyledLink1></MenuItem>
          <MenuItem onClick={() => { setOpen(!open) }}><StyledLink1 to='/' element={<Home />} >About Us</StyledLink1></MenuItem>
          <MenuItem onClick={() => { setOpen(!open) }}><StyledLink1 to='/' element={<Home />} >Profile</StyledLink1></MenuItem>
          <MenuItem onClick={() => { setOpen(!open) }}><StyledLink1 to='/AddBLog'>Add Your Blog <BorderColorIcon/></StyledLink1></MenuItem>
          
        </Box>

      </Menu>
    </AppBar>
  )
}
