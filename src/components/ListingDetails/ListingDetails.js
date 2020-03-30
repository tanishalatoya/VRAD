import React, { Component } from 'react';
import './ListingDetail.scss';

class ListingDetail extends Component {
  constructor() {
    super();
    this.state = {
      currentListing: undefined
    };
  }

  fetchListings() {
    fetch('http://localhost:3001/api/v1/areas')
    .then(response => response.json())
    .then(areasData => {
      const allData = areasData.areas.map(area => {
        return fetch(`http://localhost:3001${area.details}`)
        .then(res => res.json())
        .then(details => {
          const allListings = details.listings.map(listing => {
            return fetch(`http://localhost:3001${listing}`)
            .then(res => res.json())
          })
          return Promise.all(allListings)
        })
      })
      return Promise.all(allData)
    })
    .then(err => console.log(err))
  }

  fetchListingDetails(id){
    fetchListings()
    return fetch(`http://localhost:3001/api/v1/listings/${id}`)
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  componentDidMount() {
    const {
      match: {
        params: { listing_id }
      }
    } = this.props;
    fetchListingDetails(listing_id)
    .then(currentListing => this.setState({ currentListing }));
  }

  render()    
  }

}

export default ListingDetail;
