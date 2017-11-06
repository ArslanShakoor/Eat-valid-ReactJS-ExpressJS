import React, { Component } from 'react';
import * as actions from '../../actions/reviews';
import { connect } from 'react-redux';
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';

class RatingMy extends Component {
  componentDidMount() {
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
    const reviews = this.props.reviews;
    if (reviews) {
      const key = 0;
      return _.map(this.props.reviews, rating => {
        return (
          <div key={rating.name}>
            <div className="reviews-section">
              <div className="reviewer-info">
                <div className="col-xs-6 name">{rating.name}</div>
                <div className="col-xs-3 date">
                  {this.getFormatDate(rating.review[key].dateCreated)}
                </div>
                <div className="col-xs-3 pull-right editDelete edit-delete ">
                  {this.editDelete(rating.review[key]._id, this.props.history)}
                </div>
              </div>
              <div className="row reviewer-star">
                <div className="col-sm-3 ">
                  {this.getRating(rating.review[key].overall)}
                  OVERALL
                </div>
                <div className="col-sm-3">
                  {this.getRating(rating.review[key].taste)}
                  TASTE
                </div>

                <div className="col-sm-3">
                  {this.getRating(rating.review[key].cleanliness)}
                  CLEAN
                </div>
                <div className="col-sm-3">
                  {this.getRating(rating.review[key].service)}
                  SERVICE
                </div>
              </div>

              <div className="review-description">
                {rating.review[key].description}
              </div>
            </div>
          </div>
        );
      });
    } else {
      return <p> Loadinng</p>;
    }
  }
}
function mapStateToProps({ reviews }) {
  console.log('myreview');
  console.log(reviews);
  return {
    reviews
  };
}

export default connect(mapStateToProps, actions)(RatingMy);
