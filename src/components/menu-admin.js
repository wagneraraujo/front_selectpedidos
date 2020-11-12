import React, { useState, useEffect } from "react";
import { useParams, Route } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import BusinessIcon from "@material-ui/icons/Business";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Collapse from "@material-ui/core/Collapse";

import SettingsIcon from "@material-ui/icons/Settings";
import logoSelect from "../images/logo.png";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import InboxIcon from "@material-ui/icons/MoveToInbox";

import api from "../services/api";
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

export default function MenuAdmin({ titlePage }) {
  const classes = useStyles();
  const theme = useTheme();
  const [nomerepresentante, setNomeRepresentante] = useState("Representante");
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {titlePage}
          </Typography>
          <Typography variant="a" align="right" Wrap>
            Olá {nomerepresentante}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <img
          src={logoSelect}
          className={classes.logoSelect}
          alt="Select Nutri"
          style={{
            float: "left",
            width: "80%",
            height: "auto",
            position: "absolute",
            padding: "7px"
          }}
        />
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button component="a" href="/admin">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component="a" href="/admin/representante">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Representantes" />
          </ListItem>
          <ListItem button component="a" href="/admin/empresas">
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="Empresas" />
          </ListItem>
          <ListItem button component="a" href="/admin/produtos">
            <ListItemIcon>
              <CardGiftcardIcon />
            </ListItemIcon>
            <ListItemText primary="Produtos" />
          </ListItem>
          <ListItem button component="a" href="/admin/pedidos">
            <ListItemIcon>
              <AddShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Pedidos" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Minha Conta" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Sair" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
