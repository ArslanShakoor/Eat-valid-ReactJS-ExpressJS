import React, { Component } from 'react';
import RatingForm from './RatingForm';
import RatingReview from './RatingReview';
import { reduxForm } from 'redux-form';

class RatingNew extends Component {
  state = { ratingReview: false };
  renderContent(id) {
    let description = 'description value';
    if (this.state.showFormReview) {
      return (
        <RatingReview
          //using id to find out it is create or update request
          id={id}
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
        //using id to know it is create or update request
        id={id}
        onSurveySubmit={() =>
          this.setState({
            showFormReview: true
          })}
      />
    );
  }
  render() {
    const id = this.props.location.query;
    return this.renderContent(id);
  }
}
export default reduxForm({
  form: 'ratingForm'
})(RatingNew);
