import React, { Component } from 'react';

class ListingDetails extends Component {
  constructor() {
    super();
  }

  render() {
    const featureList = this.props.currentListing.listingDetails.features.map(feat => {
      return <li>{feat}</li>
    })
    console.log(featureList)
    return (
      <section>
        <h1>{this.props.currentListing.listingName}</h1>
        <p>Number of Beds: {this.props.currentListing.listingDetails.beds}</p>
        <p>Number of Bathrooms: {this.props.currentListing.listingDetails.baths}</p>
        <p>Cost Per Night: ${this.props.currentListing.listingDetails.cost_per_night}.00</p>
        <h2>Features</h2>
        <ul>
          {featureList}
        </ul>
        <button>Favorite Listing</button>
      </section>
    )
  }
}
export default ListingDetails;
