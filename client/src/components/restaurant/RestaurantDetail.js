import React, { Component } from 'react';
import RestaurantHeader from './RestaurantHeader';
import RatingReviews from '../ratings/RatingReviews';
import RestaurantInfo from './RestaurantInfo';
import RestaurantFeatured from './RestaurantFeatured';

class RestaurantDetail extends Component {
  render() {
    const { id } = this.props.match.params;
    const { rating } = this.props.match.params;
    const { name } = this.props.match.params;
    let props = {
      name,
      rating
    };
    return (
      <div>
        <RestaurantHeader {...props} />

        <div className="col-md-9">
          <RatingReviews id={id} />
        </div>
        <div className="col-md-3">
          <RestaurantInfo id={id} />

          <div className="detail-featured">
            <span className="featured-restaurant">FEATURED</span>
            <RestaurantFeatured />
          </div>
        </div>
      </div>
    );
  }
}
export default RestaurantDetail;
