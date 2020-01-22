import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  card: { height: '400px' },
  media: {
    // height: '50%',
    // width: '50%',
    paddingTop: '50%'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  link: {
    textDecoration: 'none',
    '&:hover,&:focus': {
      textDecoration: 'none'
    }
  }
}));

const TechCard = ({ data }) => {
  const classes = useStyles();

  return (
    <>
      <Link className={classes.link} href={data.url} target="_blank">
        <Card className={classes.card}>
          <CardHeader title={data.title} subheader={data.subtitle} />
          <CardMedia
            className={classes.media}
            image={'img/' + data.img}
            title={data.title}
          />
          <CardContent>
            <Typography variant="body2" color="textPrimary" component="p">
              {data.shortDesc}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default TechCard;
