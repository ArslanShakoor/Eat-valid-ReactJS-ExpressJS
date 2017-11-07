import React, { Component } from 'react';
import { BrowserRouter, hashHistory, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import RatingNew from './ratings/RatingNew';
import RestaurantNew from './restaurant/RestaurantNew';
import RestaurantDetail from './restaurant/RestaurantDetail';
import RestaurantList from './restaurant/RestaurantList';
import RatingMy from './ratings/RatingMy';
import Landing from './landing/';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';

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
            <Route exact path="/ratings/my" component={RatingMy} />
            <Route exact path="/restaurant/new" component={RestaurantNew} />
            <Route exact path="/restaurant/list" component={RestaurantList} />
            <Route exact path="/ratings/new" component={RatingNew} />
            <Route
              path="/restaurant/detail/:id/:name/:rating"
              component={RestaurantDetail}
            />
            <Route exact path="/" component={Landing} />
          </div>
        </BrowserRouter>
        <div>
          <span>{this.props.children}</span>
          <Alert stack={{ limit: 3 }} />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(App);
