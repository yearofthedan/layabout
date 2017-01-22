import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, object, select } from '@kadira/storybook-addon-knobs';

import { FlexLayout } from '../../src';

const Block = ({ style, children }) =>
  <div style={{ height: '100px', borderStyle: 'dashed', boxSizing: 'border-box', ...style }}>{children}</div>;

const Container = ({ style, children }) =>
  <section style={{ height: '100vh', border: 'solid', ...style }}>{children}</section>;

export default storiesOf('FlexLayout', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <FlexLayout>
      <Block style={{ backgroundColor: 'lightblue' }}>Col 1</Block>
      <Block style={{ backgroundColor: 'yellowgreen' }}>Col 2</Block>
    </FlexLayout>
  ))
  .add('adjustable properties', () => {
    const options = {
      begin: 'begin',
      middle: 'middle',
      end: 'end',
    };
    const alignCrossAxis = select('alignCrossAxis', options, 'begin');
    const widths = object('widths', [1, 1, 1]);

    return (
      <section>
        <FlexLayout container={Container} alignCrossAxis={alignCrossAxis} widths={widths}>
          <Block style={{ backgroundColor: 'lightblue' }}>1</Block>
          <Block style={{ backgroundColor: 'yellowgreen', height: '20px' }}>2</Block>
          <Block style={{ backgroundColor: 'red' }}>3</Block>
          <Block style={{ backgroundColor: 'papayawhip' }}>4</Block>
          <Block style={{ backgroundColor: 'orange' }}>5</Block>
        </FlexLayout>
      </section>
    );
  });
