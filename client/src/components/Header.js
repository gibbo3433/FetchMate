
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import React from "react";

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

export default function Header() {
  const displayDesktop = () => {
    return <Toolbar>{femmecubatorLogo}</Toolbar>;
  };

  const femmecubatorLogo = (
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