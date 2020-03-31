import React, { Component }from 'react';
import './App.css';
import UserLogin from '../src/components/Login/login.js';
import { AreasContainer }from '../src/components/AreasContainer/AreasContainer.js';
import { ListingDetails } from './components/ListingDetails/ListingDetails.js';
import { ListingsContainer } from '../src/components/ListingsContainer/ListingsContainer';
import { FavoritesContainer } from './components/FavoritesContainer/FavoritesContainer';
import { Switch, Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      searchArray: [],
      favorites: []

    }
  }

  setUserInfo = user => {
    this.setState({ user });
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/areas')
      .then(response => response.json())
      .then(areasData => {
        const allData = areasData.areas.map(area => {
          return fetch(`http://localhost:3001${area.details}`)
            .then(response => response.json())
            .then(details => {
              const allDetails = details.listings.map(listing => {
                return fetch(`http://localhost:3001${listing}`)
                  .then(response => response.json())
                  .then(listingInfo => {
                    return {
                      listingName: listingInfo.name,
                      listingAddress1: listingInfo.address.street,
                      listingAddress2: listingInfo.address.zip,
                      listingId: listingInfo.listing_id,
                      listingDetails: listingInfo.details,
                      areaNickname: area.area,
                      areaDetails: {...details},
                    }
                })
              })
              return Promise.all(allDetails)
            })
        })
        return Promise.all(allData)
      })
      .then(listingsByArea => this.setState({ listingsByArea }))
      .then(() => this.setState({searchArray: [
        ...this.state.listingsByArea[0],
        ...this.state.listingsByArea[1],
        ...this.state.listingsByArea[2],
        ...this.state.listingsByArea[3]]}, () => console.log(this.state)))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <main>
       <Switch>
        <Route path='/favorites' render={ () => <FavoritesContainer
          user={this.state.user}
          favorites={this.state.favorites}
          />} />
         <Route path='/areas/:areas_id/listing/:listing_id' render={({ match }) => {
           return <ListingDetails
            currentListing={ this.state.searchArray.find(detail => detail.listingId === parseInt(match.params.listing_id)) }
            match={match}
            user={this.state.user}/>}
         }/>
          <Route path='/areas/:id' render={ ({ match }) => <ListingsContainer
            listingsByArea={ this.state.searchArray.filter(areaListing =>
            areaListing.areaDetails.id === parseInt(match.params.id)) }
            match={match}
            user={this.state.user}
            favorites={this.state.favorites}
          />}/>
          <Route path="/areas" render={ () => <AreasContainer
            listingsByArea={this.state.listingsByArea}
            user={this.state.user}
            favorites={this.state.favorites}
          />}/>
          <Route exact path='/' render={ () => <UserLogin setUserInfo={this.setUserInfo} />}/>
       </Switch>
      </main>
    )
  }
}
