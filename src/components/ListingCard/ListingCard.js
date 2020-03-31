import React, { Component } from 'react';
import './ListingCard.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class ListingCard extends Component {
  constructor() {
    super();
    this.state = {
      selectedFavorites: []
    }
    this.favoritesHolding = []
  }

  updateFavoriteStatus(e) {
    if (!this.favoritesHolding.includes(e.target.id)) {
      this.favoritesHolding.push((e.target.id))
      this.setState({ selectedFavorites: this.favoritesHolding}, () => console.log('in state', this.state.selectedFavorites))
    } else {
      this.favoritesHolding.splice(this.favoritesHolding.indexOf(e.target.id), 1)
      this.setState({ selectedFavorites: this.favoritesHolding}, () => console.log('in strate', this.state.selectedFavorites))
    }
  }

  render() {
    return (
      <section className='listings-card'>
        <h2>&ldquo;{this.props.listingName}&rdquo;</h2>
        <p>Street: {this.props.listingAddress1}</p>
        <p>Zip Code: {this.props.listingAddress2}</p>
        <div>
        <button id={this.props.id} onClick={e => this.updateFavoriteStatus(e)}>Favorite</button>
        <Link to={`/areas/${this.props.areaId}/listing/${this.props.id}/details`}>
        <button>View Listing Details</button>
        </Link>
        </div>
      </section>
    )
  }
}

// export default ListingsCard;

ListingCard.propTypes = {
  key: PropTypes.number,
  name: PropTypes.string,
  address: PropTypes.string,
  zip: PropTypes.string
};
