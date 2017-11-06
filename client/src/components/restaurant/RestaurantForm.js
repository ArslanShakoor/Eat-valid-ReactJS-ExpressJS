import React, { Component } from 'react';
import _ from 'lodash';
import ReactStars from 'react-stars';
import { reduxForm, Field } from 'redux-form';
import restaurantFields from './restaurantFields';
import field from '../../utils/form/field';
import validate from './validate';
import * as actions from '../../actions/restaurant';
import { connect } from 'react-redux';

class RestaurantForm extends Component {
  renderFirstField() {
    return _.map(restaurantFields, ({ name, label, type, req, featured }) => {
      return (
        <Field
          key={name}
          type={type}
          label={label}
          name={name}
          req={req}
          featured={featured}
          express={name}
          component={field}
        />
      );
    });
  }

  onSubmit(values) {
    this.props.createRestaurant(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="form">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
  form: 'RatingForm'
})(connect(null, actions)(RestaurantForm));
