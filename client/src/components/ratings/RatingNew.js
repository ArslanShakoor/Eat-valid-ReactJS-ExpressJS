import React, { Component } from 'react';
import RatingForm from './RatingForm';
import RatingReview from './RatingReview';
import { reduxForm } from 'redux-form';

class RatingNew extends Component {
  state = { ratingReview: false };
  renderContent() {
    if (this.state.showFormReview) {
      return (
        <RatingReview
          onCancel={() => {
            this.setState({
              showFormReview: false
            });
          }}
        />
      );
    }
    return (
      <RatingForm
        onSurveySubmit={() =>
          this.setState({
            showFormReview: true
          })}
      />
    );
  }
  render() {
    return this.renderContent();
  }
}
export default reduxForm({
  form: 'ratingForm'
})(RatingNew);
