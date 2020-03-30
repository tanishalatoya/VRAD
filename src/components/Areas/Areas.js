import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Areas.css';

export default class Areas extends Component {
  constructor() {
    super();
    this.state = {
      areaId: null
    }
  }

  render() {
    return (
      <section className='area-card'>
        <h3>&ldquo;{this.props.areaNickname}&rdquo;</h3>
        <h4>{this.props.name}</h4>
        <p>{this.props.location}</p>
        <p>{this.props.about}</p>
        <Link to='/listings'>
        <button id={this.props.id}>View Listings</button>
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
