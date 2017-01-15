import React from 'react';
import { shallow } from 'enzyme';
import { ColumnLayout } from '../';

it('renders without crashing', () => {
  shallow(<ColumnLayout />);
});
