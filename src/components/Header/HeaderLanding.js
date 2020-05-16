/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

import LoginPage from 'views/LoginPage/LoginPage';
// @material-ui/icons
import { Apps, AccountCircle, PersonAdd , AttachMoney} from "@material-ui/icons";
import { Navigation} from 'react-mdl';


// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  console.log("headerlanding props",props)
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button

          color="transparent"
          className={classes.navLink}
          href="/site/login"
        >
          <AccountCircle className={classes.icons} /> Ingresar
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button

          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <PersonAdd className={classes.icons} /> Registrarse
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button

          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <AttachMoney className={classes.icons} /> Pagos
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>

    </List>
  );
}
