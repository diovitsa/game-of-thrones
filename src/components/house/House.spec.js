import React from 'react';
import House from './House';
import TestRenderer, { act } from 'react-test-renderer';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'


describe('House', () => {
  let component;
  let wrapper;

  const defaultProps = {
    house: {
      words: 'testWords',
      name: 'test house name'
    }
  };

  const middlewares = [];
  const mockStore = configureMockStore(middlewares);

  const initialState = { characters: { charactersList: [], isLoading: false } };

  beforeEach(() => {
    component = TestRenderer.create(
      <Provider store={mockStore(initialState)}>
        <House {...defaultProps}/>
      </Provider>
    );

    wrapper = component.root.findByType(View);
  });

  describe('when closed', () => {
    it('should render properly', () => {
      expect(wrapper.props.children).toMatchSnapshot();
    });
  });

  describe('when opened after clicking on it', () => {
    it('should render properly', () => {
      const header = component.root.findByType(Text);

      act(() => {
        header.props.onPress();
      });

      expect(wrapper.props.children).toMatchSnapshot();
    });
  });
});