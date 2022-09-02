import { Avatar, Box, CardContent, CardMedia, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import Card from "../card/Card";

const Rightbar = () => {
  return (
    <Box >
      <Typography align="center" bgcolor="black" color="white">
        Most Popular
      </Typography>
      <List
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src="images/side1.webp"
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src="images/side2.jpeg"
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src="images/side3.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <Divider variant="inset" component={"li"} />
      </List>
      <Typography align="center" bgcolor={"black"} color="white">
        About Us
      </Typography>
      <Box>
        {" "}
        <CardMedia
          component="img"
          alt="green iguana"
          height="100%"
          image={"https://i.pinimg.com/originals/c9/97/6f/c9976fc3a92540856bb957a76818875d.gif"}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" align="center" component="div" color="tomato" >
            Milky Way
          </Typography>
          <Typography gutterBottom variant="h5" align="center" component="div" >
            The Milky Way galaxy is just one of the billions of galaxies in the universe.
          </Typography>
          <Typography gutterBottom variant="body2" align="center" component="div" color="text.secondary">
            All about galaxy
          </Typography>
          <Typography variant="h5" align="center" component="div" color="text.secondary">
            The Milky Way gets its name from a Greek myth about the goddess Hera who sprayed milk across the sky. In other parts of the world, our galaxy goes by other names.
          </Typography>
        </CardContent>
      </Box>
    </Box>
  );
}

export default Rightbar