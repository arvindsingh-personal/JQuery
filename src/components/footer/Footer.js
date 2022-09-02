import { Box, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import { Facebook, Instagram, Menu as MenuIcon, Twitter } from '@mui/icons-material/';


const SocialBox = styled(Box)({
  display: 'felx',
  color:'white'
});

const Footer = () => {
  return (
    <Box sx={{ background: 'black', height:"300px" }}>
      <Stack direction={{ xs: 'row', md: 'row' }} p={7}>
        <Box flex={1}>
          <Typography align={"center"} color={"white"}>
            Contact Us
          </Typography>
          <Typography align={"center"} color={"white"}>
            persona que se dedica a la
          </Typography>
          <Typography align={"center"} color={"white"}>
            Fue popularizado
          </Typography>
          <Typography align={"center"} color={"white"}>
            ¿De dónde viene?
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography align={"center"} color={"white"}>
            Data Policies
          </Typography>
          <Typography align={"center"} color={"white"}>
            Cookies
          </Typography>
          <Typography align={"center"} color={"white"}>
            Data Safety
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography align={"center"} color={"white"}>
           Categories
          </Typography>
          <Typography variant={"body2"} align={"center"} color={"white"}>
           Kids 
          </Typography>
          <Typography variant={"body2"} align={"center"} color={"white"}>
           Women
          </Typography>
          <Typography variant={"body2"} align={"center"} color={"white"}>
           Men
          </Typography>
        </Box>
        <Box  >
          <Typography color={"white"} align={"center"}>
            Follow Us
          </Typography>
          <SocialBox>
          <Facebook sx={{m:1}} />
          <Instagram sx={{m:1}} />
          <Twitter sx={{m:1}} />
        </SocialBox>
        </Box>
      </Stack>

    </Box>
  )
}

export default Footer