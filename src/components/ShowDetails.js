import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link as RouterLink } from 'react-router-dom';
import parse from 'html-react-parser'

const useStyles = makeStyles({
  root: {
    width: "100%",
    minWidth: 275,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "left",
    margin: 10,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 295,
    width: 200,
    margin: 10,
  },
  content: {
    maxWidth: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  action: {
      alignSelf: "flex-end",
  },
  back: {
      display: "flex",
      alignItems: "center",
      alignSelf: "flex-start",
  }
});

const ShowDetails = function(props) {
    const classes = useStyles();
    const description = parse(props.selectedShow.show.summary ? props.selectedShow.show.summary : "Not available" )
        return (
        <div className="details">
            <Typography className={classes.back}>
                <ArrowBackIcon color="primary"/>
                <Link variant="outlined" size="large" component={RouterLink} to="/">Back to Search Results</Link>
            </Typography>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={props.selectedShow.show.image ? props.selectedShow.show.image.medium : "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"}
                    title={props.selectedShow.show.name}
                />
                <CardContent className={classes.content}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Release date: {props.selectedShow.show.premiered}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {props.selectedShow.show.name}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Genre: {props.selectedShow.show.genres.join(", ")}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Rating: {props.selectedShow.show.rating.average ? props.selectedShow.show.rating.average : "Not available" }
                        </Typography>
                        <Typography color="textSecondary" component="p">
                            <b>Summary: </b>{description}
                        </Typography>                      
                </CardContent>
            </Card>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { selectedShow: state.selectedShow.selectedShow[0] }
}

export default connect(mapStateToProps)(ShowDetails);