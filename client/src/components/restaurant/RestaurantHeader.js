import React, { Component } from 'react';
import * as actions from '../../actions';
import ReactStars from 'react-stars';
import './css/restaurant_style.scss';
class RestaurantHeader extends Component {
  render() {
    return (
      <header className="review">
        <div className="overlay">
          <div className="container">
            <h1 className="display-1 text-white">{this.props.name}</h1>
            <div className="content">
              <div className="stars">
                <ReactStars
                  count={5}
                  size={30}
                  value={Number(this.props.rating)}
                  edit={false}
                />
              </div>
              <h3 className="rating-value text-white">{`\u00A0\u00A0  ${(Math.round(
                this.props.rating * 100
              ) / 100
              ).toFixed(1)} Ratings`}</h3>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default RestaurantHeader;
