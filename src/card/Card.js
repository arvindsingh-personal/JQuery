import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Card = ({cardImage}) => {
  return (
    <Box>
      <CardMedia
        component="img"
        alt="green iguana"
        height="100%"
        image={cardImage}
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
          The Milky Way gets its name from a Greek myth about the goddess Hera who sprayed milk across the sky. In other parts of the world, our galaxy goes by other names. In China it's called the “Silver River,” and in the Kalahari Desert in Southern Africa, it's called the “Backbone of Night.”
        </Typography>
      </CardContent>
    </Box>
  )
}

export default Card