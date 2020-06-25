import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  media: {
    height: 240,
  },
});

const Writing = ({ text }) => {
  const classes = useStyles();

  return (
    <p>Doctolib is concerned by HIV. If you need a specialist, doctolib can help you to find the adequate person in your area <br/>
    Moreover is we want to help you to accompany you and to efficiently prevent HIV contamination or to handle your treatments. Stop AIDS together</p>
  );
}

export default Writing;