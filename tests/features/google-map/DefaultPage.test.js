import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/google-map/DefaultPage';

describe('google-map/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      googleMap: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.google-map-default-page').length
    ).toBe(1);
  });
});
