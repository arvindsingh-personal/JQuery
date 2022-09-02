import { Box, CardContent, CardMedia, Grid, styled } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import Card from "../card/Card";
import { Link } from "react-router-dom";
import Blogs from "../../data";

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Recents = () => {

  let Blog = Blogs();

  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item >
          <Box>
            {" "}
            <CardMedia
              component="img"
              alt="green iguana"
              height="100%"
              image={"images/milky-way.jpg"}
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
        </Grid>
        <Grid item xs={12} md={6} >
          <Card />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Recents;
