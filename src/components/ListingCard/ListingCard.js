import React, { Component } from 'react';
import './ListingCard.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class ListingCard extends Component {
  constructor() {
    super();
    this.state = {

    }
    this.favoritesHolding = []
  }

  updateFavoriteStatus = (e) => {
    if (!this.props.favorites.includes(e.target.id)) {
      this.favoritesHolding.push(e.target.id)
      this.props.setFavorites(this.favoritesHolding)
      this.favoritesHolding = []
    } else {
      this.props.setUpdatedFavorites(e.target.id)
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
        <button>View Listing</button>
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
