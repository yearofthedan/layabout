import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { SpacedColumn } from '../../src';

const infoConfig = { inline: true, source: true, header: false, propTables: false };
const Block = ({ style, children }) =>
  <div style={{ height: '40px', width: '40px', borderStyle: 'dashed', boxSizing: 'border-box', ...style }}>{children}</div>;
const Container = ({ style, children }) =>
  <section style={{ height: '250px', border: 'solid', ...style }}>{children}</section>;

export default storiesOf('SpacedColumn', module)
  .addDecorator(withKnobs)
  .addWithInfo('default',
    `
      This is the default behaviour of the SpacedColumn.
    `,
  () => (
    <div style={{ display: 'flex', height: '200px' }}>
      <SpacedColumn>
        <Block style={{ backgroundColor: 'lightblue' }}>Col 1</Block>
        <Block style={{ backgroundColor: 'yellowgreen' }}>Col 2</Block>
      </SpacedColumn>
    </div>
  ), infoConfig)
  .addWithInfo('adjust properties',
  `
    You can use the knobs to adjust properties and see the effect (the source will also update).
  `,
   () => {
     const alignCrossAxis = select('alignCrossAxis',
     ['begin', 'middle', 'end'],
     'begin');

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
         <SpacedColumn container={Container} alignCrossAxis={alignCrossAxis} spacing={spacing}>
           <Block style={{ backgroundColor: 'lightblue' }}>1</Block>
           <Block style={{ backgroundColor: 'yellowgreen', height: '20px' }}>2</Block>
           <Block style={{ backgroundColor: 'red' }}>3</Block>
           <Block style={{ backgroundColor: 'papayawhip' }}>4</Block>
           <Block style={{ backgroundColor: 'orange' }}>5</Block>
         </SpacedColumn>
       </section>
     );
   }, infoConfig);
