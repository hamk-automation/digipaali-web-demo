import React from 'react';
import { shallow } from 'enzyme';
import { Maps } from '../../../src/features/google-map/Maps';

describe('google-map/Maps', () => {
  it('renders node with correct class name', () => {
    const props = {
      googleMap: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Maps {...props} />
    );

    expect(
      renderedComponent.find('.google-map-maps').length
    ).toBe(1);
  });
});
