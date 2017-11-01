import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';
import * as actions from '../../actions/restaurant';

class RestaurantFeatured extends Component {
  componentDidMount() {
    console.log('asd');
    this.props.featuredRestaurant();
  }
  render() {
    return _.map(this.props.restaurant, rest => {
      return (
        <Link to={`show/${rest._id}`}>
          <div className="col-md-3" key={rest.name}>
            <div className="restaurant-block">
              <div className="restaurant-name">{rest.name}</div>
              <div className="type">{rest.type}</div>
              <div className="review-decor">
                <p>{rest.review}</p>
              </div>
              <div className="rating">
                <ReactStars count={5} size={20} value={4} edit={false} />
              </div>
            </div>
          </div>
        </Link>
      );
    });
  }
}
function mapStateToProps({ restaurant }) {
  console.log(restaurant);
  return {
    restaurant
  };
}

export default connect(mapStateToProps, actions)(RestaurantFeatured);
