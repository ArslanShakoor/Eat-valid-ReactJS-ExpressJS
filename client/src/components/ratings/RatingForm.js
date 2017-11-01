// @flow

import React, { Component } from 'react';
import _ from 'lodash';
import ReactStars from 'react-stars';
import { reduxForm, Field } from 'redux-form';
import './css/rating_style.scss';
import formFields from './formFields';
import field from '../../utils/form/field';
import validate from './validate';

class RatingForm extends Component {
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

  onSubmit(value) {
    this.props.CreateRestaurant(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="form">
        <form onSubmit={handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFirstField()}
          <button type="submit" className="button button-block">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default reduxForm({
  validate,
  form: 'ratingForm',
  destroyOnUnmount: false
})(RatingForm);
