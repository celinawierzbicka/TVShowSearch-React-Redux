import React from 'react';
import { connect } from 'react-redux';
// import { fetchShows } from '../actions';

class ShowList extends React.Component {
    // componentDidMount() {
    //     this.props.fetchShows();
    // }

    renderList() {
        return this.props.shows.map(show => {
            return (
                <div key={show.show.id}>
                    <h2>{show.show.name}</h2>
                    <p>Rating: {show.score}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { shows: state.shows.shows }
}

export default connect(mapStateToProps)(ShowList);