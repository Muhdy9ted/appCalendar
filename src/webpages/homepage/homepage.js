import React from 'react';
import classes from  './homepage.module.scss';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import FolderIcon from '@mui/icons-material/Folder';
import TimerIcon from '@mui/icons-material/Timer';
import RestoreIcon from '@mui/icons-material/Restore';
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Divider from '@mui/material/Divider';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import avatarImage from '../../assets/img/avatar.png'

function breadcrumbsHandler(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const homepage = () => {

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" onClick={breadcrumbsHandler} sx={{fontWeight: 'bold', cursor: 'pointer'}}>
      Project
    </Link>,
    <Typography key="3" color="text.primary" sx={{fontWeight: 'light'}}>
      GSE Banking App
    </Typography>,
  ];

  return (
    <div className={classes.dashboard}>
      <aside>
        <div className={classes['side-menu']}>
          <div className={classes.logo}>
            <Avatar sx={{ bgcolor: blue[500], fontSize: '10px', width: 45, height: 45  }}>LOGO</Avatar>
            <div className={classes['right-side']}>
              <Typography variant="h3" gutterBottom component="div" className={classes.badge}>PJ</Typography>
              <ArrowLeftIcon sx={{width: 30, height: 30,cursor: 'pointer'}} />
            </div>
          </div>

          <div className={classes['side-menu-list']}>
            <ul>
              {[{text: 'Dashboard', icon: <DashboardIcon />}, {text: 'Analytics', icon: <AnalyticsIcon />}, {text: 'Projects', icon: <FolderIcon />}, {text: 'Tracking', icon: <TimerIcon />}, {text: 'History', icon: <RestoreIcon />}, {text: 'Settings',icon: <SettingsIcon />}].map((item) => (
                <li key={item.text}>
                  <p className={classes['list-icon']}>
                    {item.icon}
                  </p>
                  <p className={classes['list-text']}>{item.text}</p>
                  <div/>
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.body2}>
            <Button variant="outlined" endIcon={<AddIcon sx={{backgroundColor: '#2196f3', color: 'white', borderRadius: '50%', fontSize: '40px !important', marginLeft: '-10px', boxShadow: '3px 8px 15px 2px rgb(193 193 193)'}} />}>
              <div className={classes['btn-text']}>
                <p>Create</p>
                <p> new task</p>
              </div>
            </Button>
          </div>

          <div className={classes.footer}>
            <Avatar src={avatarImage} sx={{ fontSize: '10px', marginRight: '15px', width: 55, height: 55  }} />
            <div className={classes.name}>
              <p>Finna A.</p>
              <p className={classes.email}>finna@iksg.com</p>
            </div>
          </div>
        </div>
      </aside>

      <section className={classes['dashboard-arena']}>
        {/* <Container> */}
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='transparent' sx={{boxShadow: 'none !important'}}>
              <Toolbar className={classes.toolbar}>
                <Stack spacing={2}>
                  <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    {breadcrumbs}
                  </Breadcrumbs>
                </Stack>

                <div className={classes['right-side']}>
                  <div className={classes.side1}>
                    <MessageIcon sx={{marginRight: '2rem', fontSize: '20px', cursor: 'pointer'}} />
                    <NotificationsIcon sx={{fontSize: '20px', cursor: 'pointer'}} />
                  </div>
                  <div className={classes.side2}>
                    <Avatar sx={{ bgcolor: blue[500], fontSize: '10px', width: 35, height: 35  }}>LOGO</Avatar>
                    <div className={classes['right-side']}>
                      <Typography variant="h6" gutterBottom component="div" className={classes.badge} sx={{marginBottom: 0, fontWeight: 700, marginLeft: '1rem'}}>RonasIT</Typography>
                      <ArrowDropDownIcon sx={{width: 30, height: 30,cursor: 'pointer'}} />
                    </div>
                  </div>
                </div>
              </Toolbar>
            </AppBar>
          </Box>
        {/* </Container> */}
      </section>
    </div>
  )
}

export default homepage