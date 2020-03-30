import React, { Component } from 'react';

class ListingDetails extends Component {
  constructor() {
    super();
  }

  render() {
    console.log('made-it')
    return (
      <section>
        <h1>{this.props.currentListing.listingName}</h1>
      </section>
    )
  }
}
export default ListingDetails;
