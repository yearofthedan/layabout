import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ColumnLayout from '../src/ColumnLayout';

storiesOf('ColumnLayout', module)
  .add('Layout no specific widths', () => (
    <ColumnLayout>
      <div
        style={{ borderStyle: 'dashed', boxSizing: 'border-box', backgroundColor: 'lightblue', height: '100px' }}
      >Col 1</div>
      <div style={{ borderStyle: 'dashed', boxSizing: 'border-box', backgroundColor: 'yellowgreen', height: '100px' }}>Col 2</div>
    </ColumnLayout>
  ))
  .add('Nav bar', () => (
    <ColumnLayout container="nav" columns={[1, 1, 1, 10, 1]}>
      <a>Home</a>
      <a>Latest news</a>
      <a>FAQs</a>
      <a>Contact</a>
      <a>Logout</a>
    </ColumnLayout>
  ))
  .add('Repeating rows', () => {
    const Block = ({ style, children }) =>
      <div style={{ height: '200px', ...style }}>{children}</div>;
    return (
      <ColumnLayout container="section" columns={[1, 1, 1]}>
        <Block>1</Block>
        <Block>2</Block>
        <Block>3</Block>
        <Block>4</Block>
        <Block>5</Block>
      </ColumnLayout>
    );
  });
