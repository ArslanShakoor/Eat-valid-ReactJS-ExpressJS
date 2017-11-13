import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import field from '../../utils/form/field';
import { withRouter } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions/reviews';
const RatingReview = ({
  onCancel,
  formValues,
  id,
  submitRating,
  updateRating,
  history
}) => {
  const reviewFields = _.map(formFields, ({ name, label, type, req }) => {
    return (
      <Field
        key={name}
        label={label}
        name={name}
        type={type}
        req={req}
        component={field}
        disable={true}
      />
    );
  });
  return (
    <div>
      <h1>Review Your Rating</h1>
      <div className="form">
        {reviewFields}
        <div className="clearfix">
          <button className="btn btn-lg btn-danger btn-pad" onClick={onCancel}>
            Edit
          </button>
          <button
            type="submit"
            className="btn btn-lg btn-success pull-right btn-pad"
            onClick={
              id
                ? () => updateRating(formValues, id, history)
                : () => submitRating(formValues, history)
            }
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return { formValues: state.form.ratingForm.values };
}

export default reduxForm({
  form: 'ratingForm',
  destroyOnUnmount: false
})(withRouter(connect(mapStateToProps, actions)(RatingReview)));
