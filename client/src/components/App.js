import React, { Component } from 'react';
import { BrowserRouter, hashHistory, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import RatingNew from './ratings/RatingNew';
import RestaurantNew from './restaurant/RestaurantNew';
import RestaurantDetail from './restaurant/restaurantDetail';
import Landing from './landing/';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />

            <Route exact path="/restaurant/new" component={RestaurantNew} />
            <Route exact path="/ratings/new" component={RatingNew} />
            <Route
              path="/restaurant/detail/:id/:rating/:name"
              component={RestaurantDetail}
            />
            <Route exact path="/" component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
