import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/restaurant';
import ReactStars from 'react-stars';

class RestaurantInfo extends Component {
  componentDidMount() {
    const id = this.props.id;
    this.props.fetchInfo(id);
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
    return (
      //course fees website facebook twitter graduationrate employment rate average salary
      // overall_review curriculum review job_assistance instructor_review
      <div className="camp-sidebar">
        <div className="camp-info">
          <div className="container-fluid">
            <div className="pro-value">
              <div className="col-sm-6 camp-property">Type:</div>
              <div className="col-sm-6 camp-value">
                {this.getValue(restaurant.type)}
              </div>
            </div>
            <div className="pro-value">
              <div className="col-sm-6 camp-property">website:</div>
              <div className="col-sm-6 camp-value">
                {this.getWebsite(restaurant.website)}
              </div>
            </div>
            <div className="pro-value">
              <div className="col-sm-6 camp-property">Facebook:</div>
              <div className="col-sm-6 camp-value">
                {this.getValue(restaurant.facebook)}
              </div>
            </div>
            <div className="pro-value">
              <div className="col-sm-6 camp-property">Instagram:</div>
              <div className="col-sm-6 camp-value">
                {this.getValue(restaurant.instagram)}
              </div>
            </div>
            <div className="pro-value">
              <div className="col-sm-6 camp-property">Overall:</div>
              <div className="col-sm-6 camp-value">
                {this.getRating(restaurant.overall)}
              </div>
            </div>
            <div className="pro-value">
              <div className="col-sm-6 camp-property">Taste:</div>
              <div className="col-sm-6 camp-value">
                {this.getRating(restaurant.taste)}
              </div>
            </div>
            <div className="pro-value">
              <div className="col-sm-6 camp-property">Cleanliness:</div>
              <div className="col-sm-6 camp-value">
                {this.getRating(restaurant.cleanliness)}
              </div>
            </div>
            <div className="pro-value">
              <div className="col-sm-6 camp-property">Service:</div>
              <div className="col-sm-6 camp-value">
                {this.getRating(restaurant.service)}
              </div>
            </div>

            <br />
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ restaurant }) {
  console.log(restaurant);
  return {
    restaurant
  };
}

export default connect(mapStateToProps, actions)(RestaurantInfo);
