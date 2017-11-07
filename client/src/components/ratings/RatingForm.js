// @flow

import React, { Component } from 'react';
import _ from 'lodash';
import ReactStars from 'react-stars';
import { reduxForm, Field } from 'redux-form';
import './css/rating_style.scss';
import formFields from './formFields';
import field from '../../utils/form/field';
import validate from './validate';
import * as actions from '../../actions/reviews';
import { connect } from 'react-redux';

class RatingForm extends Component {
  async componentDidMount() {
    const { id } = this.props;
    if (id) {
      const fetch = await this.props.fetchOneReview(id);
      this.handleInitialize();
    }
  }

  handleInitialize() {
    const review = this.props.reviews[0].review[0];
    const initData = {
      rating: this.props.reviews[0]._id,
      description: review.description,
      overall: review.overall,
      taste: review.taste,
      cleanliness: review.cleanliness,
      service: review.service,
      anonymous: review.anonymous
    };
    console.log(this.props.reviews[0]._id);
    this.props.initialize(initData);
  }
  renderFirstField() {
    return _.map(formFields, ({ name, label, type, req }) => {
      return (
        <Field
          key={name}
          label={label}
          name={name}
          type={type}
          req={req}
          component={field}
          editable={false}
        />
      );
    });
  }

  render() {
    let myData = {
      description: 'this description'
    };
    const { reviews } = this.props;
    console.log(reviews);
    const { handleSubmit } = this.props;
    return (
      <div className="form">
        <form onSubmit={handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFirstField()}
          <div className="clearfix">
            <button
              className="btn btn-success pull-right btn-pad"
              type="submit"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}
function mapStateToProps({ reviews }) {
  console.log(reviews);
  return {
    reviews
  };
}
export default reduxForm({
  validate,
  form: 'ratingForm',
  destroyOnUnmount: false
})(connect(mapStateToProps, actions)(RatingForm));
