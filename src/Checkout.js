import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Context } from './App';

//drawer
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import Data from './data';

export default function CheckoutPage() {
  let data = Data();
  const theme = useTheme();
  let T = 0;
  let { count, total, setTotal, itemArray, setItemArray } = React.useContext(Context);
  const [state, setState] = React.useState({
    bottom: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  let tempArray = [...itemArray];
  const Add = (index) => {
    tempArray[index].quantity++;
    setItemArray(tempArray);
    Total();
  }
  const Subtract = (index) => {
    tempArray[index].quantity--;
    if (tempArray[index].quantity === 0) {
      tempArray.splice(index, 1);
    }
    setItemArray(tempArray);
    Total();
  }
  const Total = () => {
    var sum = 0;
    tempArray.map((item) => {
      sum += item.price * item.quantity;
    })
    setTotal(sum);
  }
  const checkout = () => {
    alert("You have successfully placed your order");
    tempArray = [];
    setItemArray(tempArray);
    setTotal(0)
  }
  const list = (anchor) => (
    <Box justifyContent='center'
      sx={{ width: 'auto', heigth: '300px' }}
      role="presentation" >
      <Box
        sx={{ display: 'flex', width: '100%', height: '70px', alignItems: 'center', backgroundColor: '#D9D9D9' }} >
        <Button>
          <KeyboardDoubleArrowDownIcon sx={{ color: '#4E4E4E' }}
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          />
        </Button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#4E4E4E' }}>Your Orders({itemArray.length})</Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#4E4E4E' }}>Subtotal:  ₹{total}</Typography>
        {itemArray.length > 0 ?
          <Button variant='contained' sx={{ backgroundColor: '#FF0066' }} onClick={checkout}>Checkout</Button> :
          <Button variant='contained' sx={{ backgroundColor: '#FF0066' }}
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >Continue to shop</Button>
        }
      </Box>
      <Box sx={{
        margin: '1rem auto', padding: '2rem 1%', width: '100%',
        display: "flex", flexDirection: 'column', justifyContent: 'center', flexWrap: "wrap"
      }}>
        {itemArray.map((item, index) => (
          <Card sx={{ display: 'flex', width: "743px", margin: '1rem auto', backgroundColor: '#FAEAF0' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto', width: '35rem' }}>
                <Typography component="div" variant="h5">
                  {item.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  ₹{item.quantity * item.price}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <AddOutlinedIcon onClick={() => Add(index)} />
                <Typography >{item.quantity}</Typography>
                <RemoveOutlinedIcon onClick={() => Subtract(index)} />
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={item.image}
              alt="Live from space album cover"
            />
          </Card>
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#FEFEFE' }}>
          <Toolbar>
            <React.Fragment key='bottom'>
              <Button onClick={toggleDrawer('bottom', true)}>
                <KeyboardDoubleArrowUpIcon sx={{ color: '#4E4E4E' }} />
              </Button>
              <SwipeableDrawer
                anchor={'bottom'}
                open={state['bottom']}
                onClose={toggleDrawer('bottom', false)}
                onOpen={toggleDrawer('bottom', true)}
              >
                {list('bottom')}
              </SwipeableDrawer>
            </React.Fragment>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#4E4E4E' }}>
              Your Orders({itemArray.length})
            </Typography>
            <Typography variant="h6" component="div"
              sx={{ flexGrow: 1, color: '#4E4E4E' }}>
              Subtotal: ₹{total}
            </Typography>
            <Button variant='contained' sx={{ backgroundColor: '#FF0066' }}>Continue</Button>
          </Toolbar>
        </AppBar>
      </Box>

    </>
  );
}
