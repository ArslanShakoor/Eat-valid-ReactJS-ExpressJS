import React, { Component } from 'react';
import * as actions from '../../actions/reviews';
import { connect } from 'react-redux';
import ReactStars from 'react-stars';

class RestaurantReviews extends Component {
  componentDidMount() {
    const id = this.props.id;
    this.props.fetchReviews(id);
  }
  getRating(val) {
    return <ReactStars count={5} size={20} value={Number(val)} edit={false} />;
  }

  getName(val) {
    if (val) {
      return val.name;
    }
  }

  getFormatDate(val) {
    let cts = val;
    let date;
    if (cts) {
      return (date = new Date(cts).toLocaleDateString('en-US'));
    }
  }

  render() {
    return _.map(this.props.reviews, review => {
      return (
        <div key={review._id}>
          <div className="reviews-section">
            <div className="reviewer-info">
              <div className="col-sm-3 name">
                {review.anonymous ? 'Anonymous' : this.getName(review['_user'])}
              </div>
              <div className="col-sm-3 status" />
              <div className="col-sm-4 course" />
              <div className="col-sm-2 date">
                {this.getFormatDate(review.dateCreated)}
              </div>
            </div>
            <div className="row reviewer-star">
              <div className="col-sm-3 ">
                {this.getRating(review.overall)}
                OVERALL
              </div>
              <div className="col-sm-3">
                {this.getRating(review.taste)}
                TASTE
              </div>

              <div className="col-sm-3">
                {this.getRating(review.cleanliness)}
                CLEAN
              </div>
              <div className="col-sm-3">
                {this.getRating(review.service)}
                SERVICE
              </div>
            </div>
            <div className="review-description">{review.description}</div>
          </div>
        </div>
      );
    });
  }
}
function mapStateToProps({ reviews }) {
  console.log(reviews);
  return {
    reviews
  };
}

export default connect(mapStateToProps, actions)(RestaurantReviews);
