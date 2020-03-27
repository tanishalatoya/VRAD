import React from 'react';
import './App.css';
import UserLogin from '../src/components/Login/login.js';
import AreasContainer from '../src/components/AreasContainer/AreasContainer.js';
import { Switch, Route } from 'react-router-dom';
import { Component } from 'react';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    }
  }

  setUserInfo = user => {
    if (!user.name) {
      this.setState({ favorites: [] });
    }
    this.setState({ user });
  }

  componentDidMount() {
    //built the object in different places throughout each fetch based on what is being fetched???
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
                      //build out object how we want it to look in state here...
                      //This object is built so that there are four arrays within the bigger array. Each array represents a neighborhood.
                      //The callback function in setState shows us they are actually broken down.
                      //You can see the data in your console.log upon running the reactApp.
                      //This is hella long but we/should refactor.
                      listingName: listingInfo.name,
                      listingDetails: listingInfo.details,
                      areaNickname: area.area,
                      areaDetails: {...details}
                    }
                })
              })
              return Promise.all(allDetails)
            })
        })
        return Promise.all(allData)
      })
      .then(listingsByArea => this.setState({ listingsByArea }, () => {
        console.log(this.state)
      }))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <main>
       <Switch>
        <Route path="/areas" render={ () => <AreasContainer
          listingsByArea={this.state.listingsByArea}
          user={this.state.user} />}/>
        <Route path='/' render={ () => <UserLogin setUserInfo={this.setUserInfo} />}/>
       </Switch>
      </main>
    )
  }
}

// <Route path='/' component={UserLogin}/>
