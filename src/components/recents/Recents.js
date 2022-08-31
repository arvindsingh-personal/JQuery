import { Box, Grid } from '@mui/material'
import React from 'react'
import { Typography } from '@mui/material';
import Card from '../../card/Card';

const Recents = () => {
   return (
      <Box>
         <Grid container rowSpacing={1} columnSpacing={1}>
            <Grid item sx={{ backgroundColor: '' }}>
               <Card cardImage={'images/milky-way.jpg'} />
            </Grid>
            <Grid item xs={6} sx={{ backgroundColor: '' }}>
               <Card cardImage={'images/milky-way.jpg'} />
            </Grid>
            <Grid item xs={6} sx={{ backgroundColor: '' }}>
               <Card cardImage={'images/milky-way.jpg'} />
            </Grid>
            <Grid item xs={6} sx={{ backgroundColor: '' }}>
               <Card cardImage={'images/milky-way.jpg'} />
            </Grid>
            <Grid item xs={6} sx={{ backgroundColor: '' }}>
               <Card cardImage={'images/milky-way.jpg'} />
            </Grid>
         </Grid>
      </Box>
   )
}

export default Recents