import { Box, Typography } from '@mui/material'
import React from 'react'

const Hero = () => {
  return (
    <Box>
      <Typography align='center' variant='h3' sx={{ fontWeight: 900 }}>
        Space <b style={{ color: 'red' }}>Blog</b>
      </Typography>
      <Typography align='center' variant='body2' sx={{ fontWeight: 100 }}>
        SPACE BLOGS WE LOVE
      </Typography>
      <Box
        sx={{
          backgroundImage: `url('images/spaceBG.jpg')`,
          backgroundColor: 'black',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: 600,
          width: '100%',
          display: 'flex',
          justifyContent:'center'
        }}
      >
        <Box sx={{width:{xs:'100%',sm:'70%',md:'50%'},
         padding:{xs:2,sm:2,md:20}}}>
          <Box sx={{ background: 'white', opacity: 0.6 }}>
            <Typography variant='h6' color="tomato" align="center" pt={8}>My Space</Typography>
            <Typography variant="h4" align="center">The Eternal Silence of These Infinite Spaces Frightens Me.</Typography>
            <Typography variant="body1" align="center" pb={8}>We Love to Know About Space</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero