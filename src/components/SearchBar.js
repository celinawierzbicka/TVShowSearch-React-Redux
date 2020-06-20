import React from 'react';
import { connect } from 'react-redux';
import { searchShows, fetchShows } from '../actions';

class SearchBar extends React.Component {
    onInputChange = event => {
        this.props.searchShows(event.target.value);
        console.log(this.props.term)
    };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.fetchShows(this.props.term);
        console.log(this.props.shows)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <label>Shows Search</label>
                        <input type="text" onChange={this.onInputChange} />
                        <button type="submit">Search</button>
                    </div>
                </form>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { term: state.shows.term, shows: state.shows.shows }
}

export default connect(mapStateToProps, { searchShows, fetchShows })(SearchBar);