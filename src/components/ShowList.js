import React from 'react';
import { connect } from 'react-redux';
import { selectShow } from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: "80%",
    minWidth: 275,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "white"
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
    flexGrow: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  action: {
      alignSelf: "flex-end",
      marginTop: "auto",
  }
});

const ShowList = function(props) {
    const classes = useStyles();

    const onSelectShow = (showId) => {
        props.selectShow(props.filteredShows, showId)
    }

    const renderList = () => {
        if(!props.isSearched && props.filterWithNoSearchResults) {
            return <Typography>Please search for TV Shows first.</Typography>
        } else if (props.filteredShows.length > 0){
            let showList = props.filteredShows.sort(function(a, b){return b.show.rating.average - a.show.rating.average}).map(show => {
                 return (
                    <Card className={classes.root} key={show.show.id}>
                        <CardMedia
                            className={classes.media}
                            image={show.show.image ? show.show.image.medium : "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"}
                            title={show.show.name}
                        />
                        <CardContent className={classes.content}>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Release date: {show.show.premiered}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {show.show.name}
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Genre: {show.show.genres.length > 0 ? show.show.genres.join(", ") : "Not available"}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Rating: {show.show.rating.average ? show.show.rating.average : "Not available" }
                                </Typography>
                                <CardActions className={classes.action}>
                                    <Button variant="outlined" color="primary" size="medium" component={RouterLink} to={"/show/"+show.show.id} onClick={() => onSelectShow(show.show.id)}>See details</Button>
                                </CardActions>                            
                        </CardContent>
                    </Card>
                )
            });
            return (
                <Container>
                    <Typography>
                        Search results for "{props.term}":
                    </Typography>
                    {showList}
                </Container>
            )            
        } else if (props.isSearched && props.shows.length === 0) {
            return <Typography>No shows were found. Please try another query.</Typography>
        }  else if (props.filteredShows.length === 0 && props.shows.length > 0) {
            return <Typography>Sorry, no shows are broadcasted on selected day.</Typography>
        } else if (props.term === "") {
            return
        }
    }

    return (
        <div className="list">
            {renderList()}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        term: state.term.term,
        shows: state.shows.shows,
        filteredShows: state.shows.filteredShows, 
        filterWithNoSearchResults: state.shows.filterWithNoSearchResults, 
        isSearched: state.shows.isSearched }
}

export default connect(mapStateToProps, { selectShow })(ShowList);