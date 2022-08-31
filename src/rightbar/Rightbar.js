import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box>
      <Typography align='center' bgcolor="black" color="white">
        Most Popular</Typography>
      <List sx={{ width: '100%',height:'100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar sx={{height:80, width:80}} alt="Remy Sharp" src="" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem></List>
    </Box>
  )
}

export default Rightbar