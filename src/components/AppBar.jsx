import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  offset: {
    ...theme.mixins.toolbar,
    marginBottom: "1rem",
  },
}));

const Navbar = () => {
  const classes = useStyle();

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6">Concurso Preguntas y Respuestas</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </React.Fragment>
  );
};

export default Navbar;