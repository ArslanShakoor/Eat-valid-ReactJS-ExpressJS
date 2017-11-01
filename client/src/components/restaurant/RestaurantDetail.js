import React, { Component } from 'react';
import RestaurantHeader from './RestaurantHeader';

class RestaurantDetail extends Component {
  render() {
    const { id } = this.props.match.params;
    const { rating } = this.props.match.params;
    const { name } = this.props.match.params;
    let props = {
      name,
      rating
    };
    return <RestaurantHeader {...props} />;
  }
}
export default RestaurantDetail;
