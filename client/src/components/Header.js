
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const headersData = [
  {
    label: "Listings",
    href: "/listings",
  },
  {
    label: "Mentors",
    href: "/mentors",
  },
  {
    label: "My Account",
    href: "/account",
  },
  {
    label: "Log Out",
    href: "/logout",
  },
];


function Header() {

  const displayDesktop = () => {
    return <Toolbar>{Logo}{getMenuButtons()}</Toolbar>;
  };

  const getMenuButtons = () => {
  return headersData.map(({ label, href }) => {
    return (
      <Button
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
    <Typography variant="h6" component="h1">
      Fetch-Mate
    </Typography>
  );

  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}

export default Header;