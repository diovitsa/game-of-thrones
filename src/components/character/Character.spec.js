import React from 'react';
import Character from './Character';
import { shallow } from 'enzyme';
import NavigationService from '../../services/NavigationService';

describe('Character', () => {
  let component;

  const defaultProps = { character: { name: 'testName' } };

  function getComponent(props = {}) {
    return shallow(<Character {...props} />);
  }

  beforeEach(() => {
    component = getComponent(defaultProps);
    jest.spyOn(NavigationService, 'navigate');
    NavigationService.setTopLevelNavigator({
      dispatch: () => {
      }
    });
  });

  it('should show text with received character name', () => {
    component = getComponent(defaultProps);
    expect(component.find('Text').prop('children')).toEqual('testName');
  });

  describe('onPress', () => {
    it('should navigate to CharacterDetails', () => {
      component = getComponent(defaultProps);
      component.find('TouchableOpacity').simulate('press');
      expect(NavigationService.navigate).toHaveBeenCalledWith("CharacterDetails", { character: { name: "testName" } });
    });
  });
});