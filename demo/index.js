import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ColumnLayout from '../src/ColumnLayout';

storiesOf('ColumnLayout', module)
  .add('with text', () => (
    <ColumnLayout>Hello ColumnLayout</ColumnLayout>
  ));
