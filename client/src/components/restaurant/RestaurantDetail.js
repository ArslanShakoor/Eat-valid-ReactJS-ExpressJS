import React, { Component } from 'react';
import RestaurantHeader from './RestaurantHeader';
import RestaurantReviews from './RestaurantReviews';
import RestaurantInfo from './RestaurantInfo';

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
        <div className="col-md-8">
          <RestaurantReviews id={id} />
        </div>
        <div className="col-md-4">
          <RestaurantInfo id={id} />
        </div>
      </div>
    );
  }
}
export default RestaurantDetail;
