import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/restaurant';

class SelectField extends Component {
  componentDidMount() {
    console.log('xyz');
    this.props.fetchField();
  }

  render() {
    return _.map(this.props.restaurant, rest => {
      return (
        <option key={rest._id} value={rest._id}>
          {rest.name}
        </option>
      );
    });
  }
}
function mapStateToProps({ restaurant }) {
  console.log(restaurant);
  return {
    restaurant
  };
}

export default connect(mapStateToProps, actions)(SelectField);
