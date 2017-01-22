import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, select } from '@kadira/storybook-addon-knobs';

import { SpacedLayout } from '../../src';

const Block = ({ style, children }) =>
  <div style={{ height: '100px', width: '100px', borderStyle: 'dashed', boxSizing: 'border-box', ...style }}>{children}</div>;

const Container = ({ style, children }) =>
  <section style={{ height: '100vh', border: 'solid', ...style }}>{children}</section>;

export default storiesOf('SpacedLayout', module)
  .addDecorator(withKnobs)
  .add('default spacing', () => (
    <SpacedLayout>
      <Block style={{ backgroundColor: 'lightblue' }}>Col 1</Block>
      <Block style={{ backgroundColor: 'yellowgreen' }}>Col 2</Block>
    </SpacedLayout>
  ))
  .add('adjustable properties', () => {
    const options = {
      begin: 'begin',
      middle: 'middle',
      end: 'end',
    };
    const alignCrossAxis = select('alignCrossAxis', options, 'begin');

    const spacingOptions = {
      begin: 'begin',
      middle: 'middle',
      end: 'end',
      between: 'between',
      around: 'around',
    };
    const spacing = select('spacing', spacingOptions, 'begin');

    return (
      <section>
        <SpacedLayout container={Container} alignCrossAxis={alignCrossAxis} spacing={spacing}>
          <Block style={{ backgroundColor: 'lightblue' }}>1</Block>
          <Block style={{ backgroundColor: 'yellowgreen', height: '20px' }}>2</Block>
          <Block style={{ backgroundColor: 'red' }}>3</Block>
          <Block style={{ backgroundColor: 'papayawhip' }}>4</Block>
          <Block style={{ backgroundColor: 'orange' }}>5</Block>
        </SpacedLayout>
      </section>
    );
  });
