import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/restaurant';
import ReactStars from 'react-stars';

class RestaurantInfo extends Component {
  componentDidMount() {
    const id = this.props.id;
    this.props.fetchInfo(id);
    window.scrollTo(0, 0);
  }
  getValue(val) {
    if (val != null) {
      return val;
    } else {
      return 'N/A';
    }
  }
  getWebsite(val) {
    if (val != null) {
      val = `http://${val}`;
      return (
        <a href={val} target="_blank">
          <img src="/src/images/web.png" width="30" height="25px" />
        </a>
      );
    } else {
      return 'N/A';
    }
  }
  getRating(val) {
    return <ReactStars count={5} size={15} value={Number(val)} edit={false} />;
  }
  render() {
    const restaurant = this.props.restaurant[0];
    if (restaurant) {
      return (
        //course fees website facebook twitter graduationrate employment rate average salary
        // overall_review curriculum review job_assistance instructor_review
        <div className="camp-sidebar">
          <div className="camp-info">
            <div className="row">
              <span className="camp-property">Type:</span>

              <span className="camp-value">
                {this.getValue(restaurant.type)}
              </span>
            </div>
            <div className="row">
              <span className="camp-property">Website:</span>

              <span className="camp-value">
                {this.getValue(restaurant.website)}
              </span>
            </div>
            <div className="row">
              <span className="camp-property">Facebook:</span>

              <span className="camp-value">
                {this.getValue(restaurant.facebook)}
              </span>
            </div>
            <div className="row">
              <span className="camp-property">Instagram:</span>

              <span className="camp-value">
                {this.getValue(restaurant.instagram)}
              </span>
            </div>
            <div className="row">
              <span className="camp-property">Overall:</span>

              <span className="camp-value">
                {this.getRating(restaurant.overall)}
              </span>
            </div>
            <div className="row">
              <span className="camp-property">Taste:</span>

              <span className="camp-value">
                {this.getRating(restaurant.taste)}
              </span>
            </div>
            <div className="row">
              <span className="camp-property">Cleanliness:</span>

              <span className="camp-value">
                {this.getRating(restaurant.cleanliness)}
              </span>
            </div>
            <div className="row">
              <span className="camp-property">Service:</span>

              <span className="camp-value">
                {this.getRating(restaurant.service)}
              </span>
            </div>

            <br />
          </div>
        </div>
      );
    } else {
      return <p>laoding...</p>;
    }
  }
}
function mapStateToProps({ restaurant }) {
  console.log(restaurant);
  return {
    restaurant
  };
}

export default connect(mapStateToProps, actions)(RestaurantInfo);
