import React from 'react';
import clsx from 'clsx';
import { 
    CssBaseline,
    Drawer,
    Box,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Badge,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Container,
    Divider,
    Grid,
 } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    MenuRounded,
    HomeRounded,
    AccountCircleRounded,
    SettingsRounded,
    PeopleAltRounded,
    InfoRounded,

} from '@material-ui/icons';
import Feedback from "./Feedback";
import Copyright from "./Copyright";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.secondary,
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.secondary,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function HomePage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuRounded />
          </IconButton>
          <IconButton href="/" color="inherit">
              <HomeRounded />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Homepage
          </Typography>
          <IconButton href="/login" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <AccountCircleRounded />
            </Badge>
          </IconButton >
          <IconButton href="/settings" color="inherit">
              <SettingsRounded />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <MenuRounded />
          </IconButton>
        </div>
        <Divider light={true}/>
        <List component="nav">
          <ListItemLink href="/contact">
              <ListItemIcon><PeopleAltRounded /></ListItemIcon>
              <ListItemText primary="Contact us" />
          </ListItemLink>
          <ListItemLink href="/about">
              <ListItemIcon><InfoRounded /></ListItemIcon>
              <ListItemText primary="About us" />
          </ListItemLink>
        </List>
        <Divider light={true}/>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item >
              <Feedback />
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}