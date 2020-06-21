import React from 'react';
import { connect } from 'react-redux';
import { filterShows } from '../actions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class FilterDay extends React.Component {
    filteringShows = event => {
        let buttons = document.querySelectorAll("#day");
        buttons.forEach(button => {button.className = "MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-outlinedSizeSmall MuiButton-sizeSmall"});
        let button = event.target
        button.className = "MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall"
        let day = event.target.textContent;
        this.props.filterShows(this.props.shows, day);
    }

    renderDays() {
        let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

        return days.map(day => {
            return (
                <Button variant="outlined" size="small" color="primary" style={{margin: "5px"}} onClick={this.filteringShows} key={day} id="day">{day}</Button>
            )
        })
    }

    render() {
        return (
            <div className="filter-wrapper">
                <Typography component="div">Filter by day:</Typography>
                <div>
                    {this.renderDays()}
                </div>
            </div>
            
        )
    }
};

const mapStateToProps = (state) => {
    return { shows: state.shows.shows }
}

export default connect(mapStateToProps, { filterShows })(FilterDay);