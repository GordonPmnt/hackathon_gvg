import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 235,
  },
  media: {
    height: 240,
  },
  button: {
    background: "yellow",
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://s3-alpha-sig.figma.com/img/0082/51f6/5877dcffd84643448a1b0fb88d4a99a8?Expires=1593993600&Signature=TLXvg~qecv-Q56jZw9DHQ2j5z6fh0KH4Z04LxTpu7-eCaNsx9sWwbqXEDAZWse2tucxybk7WrOVpjG8QvDrHjiIpQpc4hbKCqDmaunjKI~3P4q5ocjKO~Q21asWufnCxXeaMDT5n2rMWgazXkFr-AN4iCcwlSrt1eiiFtbIXRkoBtMwWzyw98KDMP50SMWlqPGrSQN71kp-IvXZCHxdIbbaewrjTDhN6LRIZ5Fe0tNFIGEQk2-32kzLixtwtm23EowBwlV6odGevlkQ-SA7u1BKG6aXcFYsZ-kz6ny9h0DpqgHlvc2ioJSjb6CCa0dq22cSR5tM8gIodnt5gUqfVBg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          title="Contemplative Reptile"
        />
        <CardContent>
        <Button size="small" variant="contained" className={classes.button}>
          I took a risk
        </Button>
          <Typography variant="body2" color="textSecondary" component="p">
          You took a risk and you’re wondering if you got HIV. Don’t panic and tell us everything
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}



