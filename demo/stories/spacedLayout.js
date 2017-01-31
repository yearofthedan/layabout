import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, select } from '@kadira/storybook-addon-knobs';

import { SpacedLayout } from '../../src';

const infoConfig = { inline: true, source: true, header: false, propTables: false };
const Block = ({ style, children }) =>
  <div style={{ height: '75px', width: '75px', borderStyle: 'dashed', boxSizing: 'border-box', ...style }}>{children}</div>;
const Container = ({ style, children }) =>
  <section style={{ height: '200px', border: 'solid', ...style }}>{children}</section>;

export default storiesOf('SpacedLayout', module)
  .addDecorator(withKnobs)
  .addWithInfo('default',
    `
      This is the default behaviour of the SpacedLayout.
    `,
  () => (
    <SpacedLayout>
      <Block style={{ backgroundColor: 'lightblue' }}>Col 1</Block>
      <Block style={{ backgroundColor: 'yellowgreen' }}>Col 2</Block>
    </SpacedLayout>
  ), infoConfig)
  .addWithInfo('adjust properties',
  `
    You can use the knobs to adjust properties and see the effect (the source will also update).
  `,
   () => {
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
   }, infoConfig);
