import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const Unauthenticated = () => {
  return (
    <div>
      <h1>Unauthenticated will go here.</h1>
      <Link to="/authenticated">
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Link>
    </div>
  );
};

export default Unauthenticated;
