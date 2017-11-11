import renderer from 'react-test-renderer';
import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import RestaurantInfo from './RestaurantInfo';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('React redux testing our RestaurantInfo', () => {
  const mockStore = configureStore();
  const initialState = { restaurant: 20 };
  let restaurant, container;

  beforeEach(() => {
    restaurant = mockStore(initialState);
    container = shallow(<RestaurantInfo store={restaurant} />);
  });

  it('render the smart component', () => {
    expect(container.length).toEqual(1);
  });

  it('chech props match with initialState', () => {
    expect(container.prop('restaurant')).toEqual(initialState.restaurant);
  });
});
