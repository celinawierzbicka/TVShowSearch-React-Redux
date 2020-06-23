// import React from 'react';
// import { connect } from 'react-redux';

// class ShowList extends React.Component {
//     renderList() {
//         if (this.props.shows){
//             return this.props.shows.sort(function(a, b){return b.show.rating.average - a.show.rating.average}).map(show => {
//                 return (
//                     <div key={show.show.id}>
//                         <div>
//                             <img src={show.show.image ? show.show.image.medium : "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"} alt={show.show.name}/>
//                         </div>
//                         <div>
//                             <h2>{show.show.name}</h2>
//                         </div>
//                         <p>Rating: {show.show.rating.average ? show.show.rating.average : "Not available" }</p>
//                         <div>
//                             <p>Genre: {show.show.genres.join(", ")}</p>
//                         </div>
//                         <div>
//                             <p>Release date: {show.show.premiered}</p>
//                         </div>
//                     </div>
//                 )
//             })
//         } else {
//             return <div>No shows were found.</div>
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {this.renderList()}
//             </div>
//         )
//     }
// };

// const mapStateToProps = (state) => {
//     return { shows: state.shows.filteredShows }
// }

// export default connect(mapStateToProps)(ShowList);