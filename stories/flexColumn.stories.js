import React from 'react';
import { storiesOf } from '@storybook/react';
import { FlexColumn } from '../src';
import { object, select } from '@storybook/addon-knobs';

const infoConfig = {
  inline: true, source: true, header: false, propTables: false,
};
const Block = ({ style, children }) => (
  <div style={{
    width: '75px', borderStyle: 'dashed', boxSizing: 'border-box', ...style,
  }}
  >
    {children}
  </div>
);
const Container = ({ style, children }) => <section style={{ height: '200px', border: 'solid', ...style }}>{children}</section>;
//
export default storiesOf('FlexColumn', module)
  .add('default',
    () => (
      <div style={{ display: 'flex', height: '200px' }}>
         <FlexColumn>
           <Block style={{ backgroundColor: 'lightblue' }}>Col 1</Block>
           <Block style={{ backgroundColor: 'yellowgreen' }}>Col 2</Block>
         </FlexColumn>
       </div>
    ), {
      ...infoConfig, text: `
      This is the default behaviour of the FlexColumn.
    `,
    })
  .add('adjust properties',
    () => {
      const options = {
        start: 'start',
        center: 'center',
        end: 'end',
      };
      const alignCrossAxis = select('alignCrossAxis', options, 'start');
      const sizes = object('sizes', [1, 1, 1]);

      return (
        <section>
           <FlexColumn container={Container} alignCrossAxis={alignCrossAxis} sizes={sizes}>
             <Block style={{ backgroundColor: 'lightblue' }}>1</Block>
             <Block style={{ backgroundColor: 'yellowgreen', width: '20px' }}>2</Block>
             <Block style={{ backgroundColor: 'red' }}>3</Block>
             <Block style={{ backgroundColor: 'papayawhip' }}>4</Block>
             <Block style={{ backgroundColor: 'orange' }}>5</Block>
           </FlexColumn>
         </section>
      );
    }, {
      ...infoConfig, text: `
    You can use the knobs to adjust properties and see the effect (the source will also update).
  `,
    });

