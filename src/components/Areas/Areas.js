import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Areas.css';

export default class Areas extends Component {
  constructor() {
    super();
    this.state = {
      areaId: null,
    }
  }

  selectAreaListing = e => {
    this.props.updateSelectedArea(e.target.id)
    this.setState({ areaId: e.target.id }, () => {
      return this.state.areaId;
    })
  }

  render() {
    return (
      <section className='area-card'>
        <h3>&ldquo;{this.props.areaNickname}&rdquo;</h3>
        <h4>{this.props.name}</h4>
        <p>{this.props.location}</p>
        <p>{this.props.about}</p>
        <Link to={`areas/${this.props.selectedAreaId}`}>
          <button
            id={this.props.id}
            type='button'
            onClick={this.selectAreaListing}>View Listings
          </button>
        </Link>
      </section>
    )
  }

}

Areas.propTypes = {
  key: PropTypes.number,
  areaNickname: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  about: PropTypes.string
};
