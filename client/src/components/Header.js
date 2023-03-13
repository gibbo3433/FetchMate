
import { AppBar, Toolbar, Typography, Button, makeStyles } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({  
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  tabButtons: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
}));

const headersData = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Profile",
    href: "/profile",
  },
  {
    label: "Log Out",
    href: "/logout",
  },
  {
    label: "Login",
    href: "/login",
  },  {
    label: "About uS",
    href: "/about",
  },
];

function Header() {

  const { logo, tabButtons, toolbar } = useStyles();

  const displayDesktop = () => {
    return <Toolbar className={toolbar}>{Logo}<div>{getMenuButtons()}</div></Toolbar>;
  };

  const getMenuButtons = () => {
  return headersData.map(({ label, href }) => {
    return (
      <Button className={tabButtons}
        {...{
          key: label,
          color: "inherit",
          to: href,
          component: RouterLink,
        }}
      >
        {label}
      </Button>
    );
  });
 };

  const Logo = (
    <Typography variant="h6" component="h1" className={logo}>
      Fetch-Mate
    </Typography>
  );

  return (
    <header >
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}

export default Header;