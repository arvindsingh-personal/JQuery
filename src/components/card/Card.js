import { Box, CardContent, CardMedia, styled, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BlogContext } from '../../App';
import Blogs from '../../data';

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const Card = () => {
  const { setID } = useContext(BlogContext);
  let Blog = Blogs();
  return (
    <Box>
      {Blog.map((item, index) => (
        <StyledLink to='/details'
          onClick={() => setID(item.id)}
          sx={{}}>
          {" "}
          <CardMedia
            component="img"
            alt="green iguana"
            height="100%"
            image={item.image}
          />
          <CardContent>
            <Typography gutterBottom variant="body1" align="center" component="div" color="tomato" >
              {item.title}
            </Typography>
            <Typography gutterBottom variant="h5" align="center" component="div" >
              {item.heading}
            </Typography>
            <Typography gutterBottom variant="body2" align="center" component="div" color="text.secondary">
              {item.subtitle}
            </Typography>
            <Typography variant="h5" align="center" component="div" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </StyledLink>
      ))}
    </Box>
  )
}

export default Card