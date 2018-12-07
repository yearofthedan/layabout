import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Grid } from '../src';

const infoConfig = {
  inline: true, source: true, header: false, propTables: false,
};
const Block = ({ style, children }) => (
  <div style={{
    height: '75px', borderStyle: 'dashed', boxSizing: 'border-box', ...style,
  }}
  >
    {children}
  </div>
);
const Container = ({ style, children }) => <section style={{ height: '200px', border: 'solid', ...style }}>{children}</section>;

export default storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .add('pretty basic',
    () => (
      <Grid
        container={Container}
        template={[20, 80]}
      >
        <Block style={{ backgroundColor: 'lightblue' }}>Centre Button</Block>
        <Block style={{ backgroundColor: 'yellowgreen' }}>Right Button</Block>
      </Grid>
    ), {
      ...infoConfig, text: `
        This is the default behaviour of the Grid.
      `,
    })
  .add('more complex',
    () => (
      <Grid
        container={Container}
        template={['auto', { centreButton: '50px' }, { rightButton: '50px' }]}
        layout={['centreButton', 'rightButton']}
      >
        <Block style={{ backgroundColor: 'lightblue' }}>Centre Button</Block>
        <Block style={{ backgroundColor: 'yellowgreen' }}>Right Button</Block>
      </Grid>
    ), {
      ...infoConfig, text: `
      This is the default behaviour of the Grid.
    `,
    });
