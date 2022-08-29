import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Context } from './App';

//drawer
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

export default function CheckoutPage() {
  const theme = useTheme();
  let { count, total, itemArray } = React.useContext(Context);
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

  const list = (anchor) => (
    <Box
      sx={{ width: 'auto', heigth: '300px' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box justifyContent='space-between'
        sx={{ display: 'flex', width: '100%',height:'70px', alignItems:'center', backgroundColor: '#D9D9D9' }}
      >
        <Button><KeyboardDoubleArrowDownIcon sx={{ color: '#4E4E4E' }} /> </Button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#4E4E4E' }}>Your Orders({itemArray.length})</Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#4E4E4E' }}>Subtotal:  ₹{total}</Typography>
        <Button variant='contained' sx={{ backgroundColor: '#FF0066' }}>Continue</Button>
      </Box>

      <Box sx={{
        margin: '1rem auto', padding: '2rem 1%', width:'100%',
        display: "flex", flexDirection: 'column', justifyContent: 'center', flexWrap: "wrap"
      }}>
        {itemArray.map((item, index) => (
          <Card sx={{ display: 'flex', width: "500px" }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto', width: '20rem' }}>
                <Typography component="div" variant="h5">
                  {item.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  ₹{item.price}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <AddOutlinedIcon />
                <Typography >{item.quantity}</Typography>
                <RemoveOutlinedIcon />
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
              Your Orders({count})
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#4E4E4E' }}>

              Subtotal: ₹{total}
            </Typography>
            <Button variant='contained' sx={{ backgroundColor: '#FF0066' }}>Continue</Button>
          </Toolbar>
        </AppBar>

      </Box>

      {/* <div>
        {['left', 'right', 'top', 'bottom'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div> */}

    </>
  );
}
