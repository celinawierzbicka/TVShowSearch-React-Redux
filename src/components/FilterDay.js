import React from 'react';
import { connect } from 'react-redux';
import { filterShows } from '../actions';

class FilterDay extends React.Component {
    filteringShows = event => {
        console.log("filter show event fired");
        let day = event.target.textContent;
        this.props.filterShows(this.props.shows, day);
    }

    renderDays() {
        let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        return days.map(day => {
            return (
                <button onClick={this.filteringShows} key={day}>{day}</button>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderDays()}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { shows: state.shows.shows }
}

export default connect(mapStateToProps, { filterShows })(FilterDay);