import React from 'react';
import { shallow } from 'enzyme';
import { GoogleMaps } from '../../../src/features/maps/GoogleMaps';

describe('maps/GoogleMaps', () => {
  it('renders node with correct class name', () => {
    const props = {
      maps: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <GoogleMaps {...props} />
    );

    expect(
      renderedComponent.find('.maps-google-maps').length
    ).toBe(1);
  });
});
