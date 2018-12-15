import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { SpacedRow } from '../src';

const infoConfig = {
  inline: true, source: true, header: false, propTables: false,
};
const Block = ({ style, children }) => (
  <div style={{
    height: '50px', width: '50px', borderStyle: 'dashed', boxSizing: 'border-box', ...style,
  }}
  >
    {children}
  </div>
);
const Container = ({ style, children }) => <section style={{ height: '200px', border: 'solid', ...style }}>{children}</section>;

export default storiesOf('SpacedRow', module)
  .addDecorator(withKnobs)
  .add('default',
    `
      This is the default behaviour of the SpacedRow.
    `,
    () => (
      <SpacedRow>
        <Block style={{ backgroundColor: 'lightblue' }}>Col 1</Block>
        <Block style={{ backgroundColor: 'yellowgreen' }}>Col 2</Block>
      </SpacedRow>
    ), {
...infoConfig, text: `
      This is the default behaviour of the SpacedRow.
    `,
})
  .add('adjust properties',
    `
    You can use the knobs to adjust properties and see the effect (the source will also update).
  `,
    () => {
      const options = {
        start: 'start',
        center: 'center',
        end: 'end',
      };
      const alignCrossAxis = select('alignCrossAxis', options, 'start');

      const spacingOptions = {
        start: 'start',
        center: 'center',
        end: 'end',
        between: 'between',
        around: 'around',
      };
      const spacing = select('spacing', spacingOptions, 'start');

      return (
        <section>
          <SpacedRow container={Container} alignCrossAxis={alignCrossAxis} spacing={spacing}>
            <Block style={{ backgroundColor: 'lightblue' }}>1</Block>
            <Block style={{ backgroundColor: 'yellowgreen', height: '20px' }}>2</Block>
            <Block style={{ backgroundColor: 'red' }}>3</Block>
            <Block style={{ backgroundColor: 'papayawhip' }}>4</Block>
            <Block style={{ backgroundColor: 'orange' }}>5</Block>
          </SpacedRow>
        </section>
      );
    }, {
      ...infoConfig, text: `
    You can use the knobs to adjust properties and see the effect (the source will also update).
  `,
    });

