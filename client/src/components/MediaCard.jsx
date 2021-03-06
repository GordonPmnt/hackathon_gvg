import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import ModalTreatment from './ModalTreatment';
import ModalRiskStepOne from './ModalRiskStepOne';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import json2mq from 'json2mq';

const useStyles = makeStyles({
  root: {
    maxWidth: 235,
    margin: '5% 2.5% 0 2.5%',
    transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
            "&:hover": {
            transform: "scale(1.04)",
            boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",

  }},
  media: {
    height: 240,
  },
});

const MediaCard = ({ choice, image, description, events, setEvents, createEvents, risk }) => {
  const classes = useStyles();
  const mobile = useMediaQuery(
    json2mq({
      maxWidth: 600,
    }),
  );

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          choice={choice}
        />
        <CardContent>
        {risk 
          ?
          <ModalRiskStepOne />
          :
          <ModalTreatment 
            choice={choice}
            events={events}
            setEvents={setEvents}
            createEvents={createEvents}
          />
        }
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MediaCard;
