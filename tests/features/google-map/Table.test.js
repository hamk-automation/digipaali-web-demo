import React from 'react';
import { shallow } from 'enzyme';
import { Table } from '../../../src/features/google-map/Table';

describe('google-map/Table', () => {
  it('renders node with correct class name', () => {
    const props = {
      googleMap: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Table {...props} />
    );

    expect(
      renderedComponent.find('.google-map-table').length
    ).toBe(1);
  });
});
