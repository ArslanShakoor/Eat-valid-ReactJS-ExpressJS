import React, { Component } from 'react';
import * as actions from '../../actions/reviews';
import { connect } from 'react-redux';
import ReactStars from 'react-stars';
import Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;

class RatingReviews extends Component {
  componentDidMount() {
    console.log('component did mount');
    this.props.fetchReviews(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id != prevProps.id) {
      this.props.fetchReviews(this.props.id);
    }
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
    scroll.scrollTo(0);
    if (this.props.reviews) {
      return _.map(this.props.reviews[0].review, review => {
        return (
          <div key={review._id}>
            <div className="reviews-section">
              <div className="reviewer-info">
                <div className="col-sm-3 name">
                  {review.anonymous
                    ? 'Anonymous'
                    : this.getName(review['_user'])}
                </div>
                <div className="col-sm-3 status" />
                <div className="col-sm-4 course" />
                <div className="col-sm-2 date">
                  {this.getFormatDate(review.dateCreated)}
                </div>
              </div>
              <div className="row reviewer-star">
                <div className="col-md-3 col-xs-6 ">
                  {this.getRating(review.overall)}
                  OVERALL
                </div>
                <div className="col-md-3 col-xs-6 ">
                  {this.getRating(review.taste)}
                  TASTE
                </div>

                <div className="col-md-3 col-xs-6 ">
                  {this.getRating(review.cleanliness)}
                  CLEAN
                </div>
                <div className="col-md-3 col-xs-6 ">
                  {this.getRating(review.service)}
                  SERVICE
                </div>
              </div>
              <div className="review-description">{review.description}</div>
            </div>
          </div>
        );
      });
      scroll.scrollTo(0);
    } else {
      return <div className="loader" />;
    }
  }
}
function mapStateToProps({ reviews }) {
  console.log('asdf');
  console.log(reviews.data);
  return {
    reviews: reviews.data
  };
}

export default connect(mapStateToProps, actions)(RatingReviews);
