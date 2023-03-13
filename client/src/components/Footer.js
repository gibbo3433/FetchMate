import React from "react";
import { AppBar, Toolbar, Typography, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({  
  bottom: {
    width: '100%',
    height: '8%',
    position: 'sticky',
    bottom: 0,
  },
}));

function Footer() {

  const { bottom } = useStyles();

  return (

        <AppBar className={bottom}>
            <Toolbar style={{ justifyContent: "center" }}>
                <Typography variant="caption">©2020</Typography>
             </Toolbar>
         </AppBar>
)};

export default Footer;

