import React from 'react';
import CharacterDetails from './CharacterDetails';
import renderer from 'react-test-renderer'

describe('CharacterDetails', () => {
  let component;
  // let componentInstance;

  const defaultProps = {
    navigation: {
      state: {
        params: {
          character: {
            name: 'testName',
            culture: 'testCulture',
            gender: 'Male',
            titles: ['testTitle']
          }
        }
      }
    }
  };


  it('should render properly', () => {
    component = renderer.create(<CharacterDetails {...defaultProps}/>).toJSON();
    expect(component).toMatchSnapshot()
  });
});