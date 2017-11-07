import React, { Component } from 'react';
import * as actions from '../../actions/reviews';
import { connect } from 'react-redux';
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';

class RatingMy extends Component {
  componentDidMount() {
    console.log('component did mount');
    this.props.myReviews();
  }

  editDelete(id, history) {
    return (
      <div>
        <Link to={{ pathname: '/ratings/new', query: id }}>
          <span className="glyphicon glyphicon-pencil" />
        </Link>

        <button
          className=" delete-button glyphicon glyphicon-trash"
          onClick={() => this.props.deleteRating(id, history)}
        />
      </div>
    );
  }
  getValue(val) {
    if (val) {
      return val;
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
    if (this.props.reviews) {
      return _.map(this.props.reviews, rating => {
        let review = rating.review[0];
        return (
          <div key={rating.name}>
            <div className="reviews-section">
              <div className="reviewer-info">
                <div className="col-xs-6 name">{rating.name}</div>
                <div className="col-xs-3 date">
                  {this.getFormatDate(review.dateCreated)}
                </div>
                <div className="col-xs-3 pull-right editDelete edit-delete ">
                  {this.editDelete(review._id, this.props.history)}
                </div>
              </div>
              <div className="row reviewer-star">
                <div className="col-md-3 col-xs-6">
                  {this.getRating(review.overall)}
                  OVERALL
                </div>
                <div className="col-md-3 col-xs-6">
                  {this.getRating(review.taste)}
                  TASTE
                </div>

                <div className="col-md-3 col-xs-6">
                  {this.getRating(review.cleanliness)}
                  CLEAN
                </div>
                <div className="col-md-3 col-xs-6">
                  {this.getRating(review.service)}
                  SERVICE
                </div>
              </div>

              <div className="review-description">{review.description}</div>
            </div>
          </div>
        );
      });
    } else {
      return <div className="loader" />;
    }
  }
}
function mapStateToProps({ reviews }) {
  return {
    reviews: reviews.data
  };
}

export default connect(mapStateToProps, actions)(RatingMy);
