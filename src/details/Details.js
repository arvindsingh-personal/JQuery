import { Box, Button, CardMedia, Container, Stack, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { BlogContext } from '../App';
import Rightbar from '../components/rightbar/Rightbar'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete'; import { useNavigate } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import Blogs from '../data';
import { SettingsSystemDaydream } from '@mui/icons-material';

const Details = () => {
  let Naigate = useNavigate();
  // let Blog = Blogs();
  const [edit, setEdit] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [checkclick,setcheckclick]=useState(false)
  // const [heading, setHeading] = React.useState('');
  // const [title, setTitle] = React.useState('');
  // const [subTitle, setSubTitle] = React.useState('');
  // const [description, setDescription] = React.useState('');

  const {Blog, ID, title, setTitle, heading, setHeading, subTitle, setSubTitle, description, setDescription } = useContext(BlogContext);
  console.log(ID);

  const Edit = () => {
    setEdit(true);
    document.getElementById('icons').style.display = 'none';
    document.getElementById('save').style.display = 'block';
  }

  React.useEffect(() => {
    document.getElementById('para').focus();
  }, [edit])

  const Delete = (index) => {
    Blog.splice(index, 1);
    Naigate('/');
  }
  //Delete Confirm
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const Save = (index) => {
    setcheckclick(true)
    let Heading = document.getElementById('para').textContent;
    setHeading(Heading);
    let Title = document.getElementById('para1').innerText;
    setTitle(Title);
    let SubTitle = document.getElementById('para2').innerText;
    setSubTitle(SubTitle);
    let Description = document.getElementById('para3').innerText;
    setDescription(Description);
    console.log(heading + "--" + title + "--" + subTitle + "--" + description)
    setEdit(false);
    SaveChanges(index);
  }
  console.log(heading)
  // React.useEffect(() => {
  //   let Heading = document.getElementById('para').textContent;
  //   let Title = document.getElementById('para1').innerText;
  //   let SubTitle = document.getElementById('para2').innerText;
  //   let Description = document.getElementById('para3').innerText;
  //     setHeading(Heading);
  //     setTitle(Title);

  //     setSubTitle(SubTitle);

  //     setDescription(Description);

  // },[heading],[title],[subTitle],[description])
  // React.useEffect(() => {
  //   let Title = document.getElementById('para1').innerText;
  //   setTitle(Title);
  // },[heading])
  // React.useEffect(() => {
  //   let SubTitle = document.getElementById('para2').innerText;
  //   setSubTitle(SubTitle);
  // },[heading])
  // React.useEffect(() => {
  //   let Title = document.getElementById('para1').innerText;
  //   setTitle(Title);
  // },[heading])
  const SaveChanges = (index) => {
    alert(heading + "--" + title + "--" + subTitle + "--" + description)
    Blog[index].title = title;
    Blog[index].heading = heading;
    Blog[index].subtitle = subTitle;
    Blog[index].description = description;
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <>
      {Blog.map((item, index) => {
        if (item.id === ID) {
          return (
            <Box>
              <Box
                sx={{
                  backgroundImage: `url('images/space.gif')`,
                  backgroundPosition: 'center',
                  backgroundAttachment: 'fixed',
                  backgroundSize: 'cover ',
                  height: '350px'
                }}
              >
                <Typography align="center" color="white" variant='h2'
                  sx={{ fontWeight: 900, padding: 10 }}
                >
                  {item.heading}
                </Typography>

              </Box>
              <Container>
                <hr />
                <Stack direction={{ xs: 'column', md: 'row' }}
                  padding={{ xs: 1, sm: 2, md: 8 }}
                >
                  <Box flex={3} sx={{ padding: "18px 100px 100px 100px" }}>
                    <h1 id="para"
                      m={4}
                      align={"center"}
                      contentEditable={edit}
                      style={{ fontWeight: 900, color: "tomato", marginBottom: '2rem' }}
                    >
                      {item.heading}
                    </h1>
                    <Typography variant="h6" m={2} color="#7C6B9C" contentEditable={edit}>
                      <p id="para1" >{item.title}</p></Typography>
                    <CardMedia
                      component="img"
                      height="600px"
                      image={item.image}
                    />
                    <Typography align='center' variant="h4" mt={2} contentEditable={edit} >
                      <p id="para2">{item.subtitle}</p>
                    </Typography>
                    <Typography
                      m={4}
                      // align={"center"}
                      color={"gray"}
                      variant="h4"
                      sx={{ fontWeight: 900 }}
                      contentEditable={edit}
                    >
                      <p id="para3">{item.description}</p>
                    </Typography>
                    <Stack direction={{ xs: "row", md: "row" }}>
                      <Box flex={{ xs: 3, sm: 4, md: 3, lg: 5 }}></Box>
                      <Box flex={1}>
                        <div id='icons'>
                          <BorderColorIcon
                            sx={{ fontSize: 35, color: '#60507C', cursor: "pointer" }}
                            onClick={Edit} />&nbsp;&nbsp;
                          <DeleteIcon aria-describedby={id} onClick={handleClick}
                            sx={{ fontSize: 40, color: 'red', cursor: "pointer" }} />
                          <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'left',
                            }}
                          >
                            <Button sx={{ m: 0.3 }} variant='outlined' onClick={() => Delete(index)}>Delete</Button>
                            <Button sx={{ m: 0.3 }} variant='outlined' onClick={handleClose}>Cancel</Button>
                          </Popover>
                        </div>
                        <div id='save' hidden>
                          <Button align="center" variant="contained" size="large"
                            sx={{ backgroundColor: '#382B50' }} onClick={() => Save(index)}
                          >Save</Button>
                        </div>
                      </Box>
                    </Stack>
                  </Box>
                  <Box flex={1}>
                    <Rightbar />
                  </Box>
                </Stack>
              </Container>
              {/* <Box>
                <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                  Open Popover
                </Button>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                </Popover>
              </Box> */}
            </Box>
          )
        }
      })}

    </>
  )
}

export default Details