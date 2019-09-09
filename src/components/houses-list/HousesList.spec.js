import React from 'react';
import { HousesList } from './HousesList';
import renderer, { act } from 'react-test-renderer'
import { ScrollView } from 'react-native';
import { CustomButton } from '../custom-button/CustomButton';
import { head } from 'lodash';

describe('HousesList', () => {
  let component;
  let wrapper;

  const emptyData = {
    houses: null,
    fetchHousesData: jest.fn(),
    page: 1,
    nextPage: jest.fn(),
    prevPage: jest.fn(),
    isLoading: true
  };

  const loadedData = {
    ...emptyData,
    houses: { data: [{ name: 'testName1' }, { name: 'testName2' }] },
    isLoading: false
  };

  describe('when data still loading', () => {
    it('should render properly', () => {
      component = renderer.create(<HousesList {...emptyData} />);
      wrapper = component.root.findByType(ScrollView);

      expect(wrapper.props.children).toMatchSnapshot();
    });
  });

  describe('on data loaded', () => {
    it('should render properly', () => {
      component = renderer.create(<HousesList {...loadedData} />);
      wrapper = component.root.findByType(ScrollView);

      expect(wrapper.props.children).toMatchSnapshot();
    });
  });

  describe('buttons', () => {
    let prevBtn;
    let nextBtn;

    beforeEach(() => {
      component = renderer.create(<HousesList {...loadedData} />);
      const buttons = component.root.findAllByType(CustomButton);

      prevBtn = head(buttons.filter(button => button.props.id === 'prevPageBtn'));
      nextBtn = head(buttons.filter(button => button.props.id === 'nextPageBtn'));
    });

    it('should change pages', () => {
      act(() => {
        prevBtn.props.onPress();
      });

      expect(component.root.props.prevPage).toHaveBeenCalled();

      act(() => {
        nextBtn.props.onPress();
      });

      expect(component.root.props.nextPage).toHaveBeenCalled();

    });
  });
});