import "./sidebar.css";
import { Favorite, Home, Menu, Person } from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import { useState } from "react";

import SimpleAccordion from "../SimpleAccordion";

import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  sidebar: {
    height: "100%",
    position: "sticky",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    fontSize: "1.6em", // This font-size added/customised by me
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },

  button: {
    color: "white",
    margin: theme.spacing(1),
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  or: {
    marginLeft: "40%",
  },
  menuIcon: {
    display: (props) => (props.open ? "flex" : "none"),
    cursor: "pointer",
    transform: "scale(2.5)",
  },
  closeIcon: {
    display: (props) => (props.open ? "none" : "flex"),
    cursor: "pointer",
    transform: "scale(2.5)",
  },

  sidebarTitle: {
    display: (props) => (props.open ? "none" : "flex"),
    fontSize: "18px",
  },
  toggle: {
    display: (props) => (props.open ? "none" : "flex"),
  },
  toggleTwo: {
    display: (props) => (props.open ? "none" : "flex"),
    height: "100%",
  },
}));

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const classes = useStyles({ open });

  return (
    <div className={classes.sidebar}>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div
            className="searchTitle"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h3 className={classes.sidebarTitle}>Search Products</h3>
            <Menu
              className={classes.menuIcon}
              onClick={() => setOpen(false)}
              size="large"
            />
            <CloseIcon
              className={classes.closeIcon}
              onClick={() => setOpen(true)}
              variant="large"
            />
          </div>

          <div className={classes.toggle}>
            <ul className="sidebarList" style={{ marginTop: "10px" }}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="upc code…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>

              <span className="or_section">
                <Typography variant="h5" className={classes.or}>
                  OR
                </Typography>
              </span>

              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Product name..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>

              <span className="or_section">
                <Typography variant="h5" className={classes.or}>
                  OR
                </Typography>
              </span>

              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Merchant No..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>

              <li>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                >
                  <Typography variant="h5">SEARCH</Typography>
                </Button>
              </li>
              <li>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                >
                  <Typography variant="h5">_RESET</Typography>
                </Button>
              </li>

              <li>
                <SimpleAccordion />
              </li>

              <li>
                <div className={classes.toggleThree}>
                  <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Widgets</h3>
                    <ul className="sidebarList">
                      <Link to="/myFavourites" className="link">
                        <li className="sidebarListItem">
                          <Favorite className="sidebarIcon" />
                          <Typography variant="h4">Favourite</Typography>
                        </li>
                      </Link>
                      <Link to="/" className="link">
                        <li className="sidebarListItem">
                          <Home className="sidebarIcon" />
                          <Typography variant="h4"> Home </Typography>
                        </li>
                      </Link>
                      <Link to="/myProfile" className="link">
                        <li className="sidebarListItem">
                          <Person className="sidebarIcon" />
                          <Typography variant="h4">Profile</Typography>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
