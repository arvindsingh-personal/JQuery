import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import { Button } from '@mui/material';
import Data from './data'
import { Context } from './App';


export default function MediaControlCard() {
  let data = Data();
  let tempArray = [];
  let { setTotal, itemArray, setItemArray } = React.useContext(Context);
  const theme = useTheme();


  const Add = (index, ID) => {
    tempArray = [...itemArray];
    let flag = 0;
    tempArray.map((item, indx) => {
      if (item.id === ID) {
        tempArray[indx].quantity += 1;
        flag = 1;
      }
    })
    if (flag === 0) {
      tempArray.push(data[index]);
    }
    setItemArray(tempArray);
    Total();
  }

  const Total = () => {
    var sum = 0;
    tempArray.map((item, index) => {
      sum += item.price * item.quantity;
    })
    setTotal(sum);
  }
  return (
    <Box sx={{
      margin: '1rem auto', padding: '2rem 1%',
      display: "flex", justifyContent: 'center', flexWrap: "wrap"
    }} >
      {data.map((item, index) => (
        <Card sx={{ display: 'flex', margin: '1rem 2rem', textAlign: 'start', width: "500px", height: "180px", float: 'left' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', paddingRight: '5rem' }}>
            <CardContent sx={{ flex: '1 0 auto', width: '15rem' }}>
              <Typography component="div" variant="h5" width='200'>
                {item.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {item.menu === 'Veg' ?
                  <CenterFocusStrongIcon sx={{ color: 'green' }} /> :
                  <CenterFocusStrongIcon sx={{ color: 'red' }} />}
                <span>{item.menu}</span>
              </Typography>
              <Typography variant="subtitle1" component="div">
                ₹{item.price}
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <Button variant="outlined" sx={{ borderColor: 'orange', color: 'orange' }}
                onClick={() => Add(index, item.id)}
              >
                Add to cart
              </Button>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 170 }}
            image={item.image}
            alt="Live from space album cover"
          />
        </Card>
      ))
      }
    </Box >
  );
}
