import React, { Component } from 'react';
import FeaturedRestaurant from '../restaurant/RestaurantFeatured';
import styles from './css/landing_style.scss';

export default class Index extends Component {
  renderHeader() {
    return (
      <header className="masthead">
        <div className="overlay">
          <div className="container">
            <h1 className="display-1 text-white">Eat Valid</h1>
            <h2 className="display-4 text-white">Only Stop for Food Lover</h2>
          </div>
        </div>
      </header>
    );
  }
  render() {
    return (
      <div>
        {this.renderHeader()}
        <div className="featured row">
          <span className="featured-restaurant">FEATURED</span>
          <FeaturedRestaurant />
        </div>
      </div>
    );
  }
}
