import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './index.scss';

class Payments extends Component {
  render() {
    console.log('environment', process.env.REACT_APP_STRIPE_KEY);
    return (
      <StripeCheckout
        name="Eat Valid"
        description="Donate us to keep you updating"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey="pk_test_fNLHb6MZE8u1Z6ywwZmBURcZ"
      >
        <button className="donate-us btn-primary">Donate Us</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
