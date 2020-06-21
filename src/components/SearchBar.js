import React from 'react';
import { connect } from 'react-redux';
import { searchShows, fetchShows } from '../actions';
import Button from '@material-ui/core/Button';

class SearchBar extends React.Component {
    onInputChange = event => {
        this.props.searchShows(event.target.value);
    };

    onFormSubmit = event => {
        let buttons = document.querySelectorAll("#day");
        buttons.forEach(button => {button.className = "MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-outlinedSizeSmall MuiButton-sizeSmall"});
        event.preventDefault();
        this.props.fetchShows(this.props.term);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <label>Shows Search</label>
                        <input type="text" onChange={this.onInputChange} />
                        <Button type="submit" variant="contained" color="primary">Search</Button>
                    </div>
                </form>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { term: state.term.term, shows: state.shows.shows }
}

export default connect(mapStateToProps, { searchShows, fetchShows })(SearchBar);