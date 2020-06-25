import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  media: {
    height: 240,
  },

  spanBlue: {
    fontWeight: "bold",
    textDecoration: "underline",
    cursor: "pointer"
  },

  spanRed: {
    color: 'rgb(197, 42, 34)',
    fontWeight: "bold",
  }

});

const Writing = ({ text }) => {
  const classes = useStyles();

  return (
    <p>Doctolib is concerned by HIV. If you need a specialist, doctolib can help you to <span className={classes.spanBlue}>find the adequate person in your area</span><br/><br/>
    Moreover is we want to help you to accompany you and to efficiently prevent HIV contamination or to handle your treatments.<span className={classes.spanRed}> Stop AIDS together</span></p>
  );
}

export default Writing;