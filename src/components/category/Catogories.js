import React from 'react'
import { Box, Stack, styled, Typography } from '@mui/material';

const StyledBox = styled(Box)({
    height:200,
    width:'100%',
    cursor: 'pointer',
    backgroundPosition: 'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'
})
const StyledTypography = styled(Typography)({
  margin:'20% 50px 25% 50px',
  background:'white',
  opacity:'0.8'
})
const Catogories = () => {
  return (
    <Box>
        <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:1}} mt={5} >
       <StyledBox sx={{backgroundImage:`url('images/spaceBG1.jpg')`}}>
        <StyledTypography align='center' variant='h5'>
        Space
        </StyledTypography>
        </StyledBox>
        <StyledBox sx={{backgroundImage:`url('images/universe-today.jpg')`}}>
        <StyledTypography align='center' variant='h5'>
        Universe Today
        </StyledTypography>
        </StyledBox>
        <StyledBox sx={{backgroundImage:`url('images/nasa.webp')`}}>
        <StyledTypography align='center' variant='h5'>
        NASA Breaking News
        </StyledTypography>
       </StyledBox>
       
        </Stack>
    </Box>
  )
}

export default Catogories