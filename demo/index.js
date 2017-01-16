import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ColumnLayout from '../src/ColumnLayout';

storiesOf('ColumnLayout', module)
  .add('Layout no props', () => (
    <ColumnLayout>
      <div style={{ borderStyle: 'dashed', backgroundColor: 'lightblue', height: '100px' }}>Col 1</div>
      <div style={{ borderStyle: 'dashed', backgroundColor: 'yellowgreen', height: '100px' }}>Col 2</div>
    </ColumnLayout>
  ));
