import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Grid, fromComponents } from '../src';

const Block = ({ style, children }) => (
  <div style={{
    height: '75px', borderStyle: 'dashed', boxSizing: 'border-box', ...style,
  }}
  >
    {children}
  </div>
);

const CenteredContainer = ({ style, children }) => (
  <div style={{
    alignItems: 'center',
    justifyItems: 'center',
    ...style,
  }}
  >
    {children}
  </div>
);
export default storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .add('using fromComponents', () => {
    const BackButton = ({ style }) => <Block style={{ backgroundColor: 'lightblue', ...style }}>Back Button</Block>;
    const ProfileButton = ({ style }) => <Block style={{ backgroundColor: 'yellowgreen', ...style }}>Profile Button</Block>;
    const Content = ({ style }) => <Block style={{ backgroundColor: 'red', ...style }}>Content</Block>;

    return (
      <Grid
        widths={['33%', 'auto', '100px']}
        heights={['100px']}
        layout={fromComponents`
          .                .          ${BackButton}
          ${Content}       ${Content} ${Content}
          ${ProfileButton} div        .
       `}
        container={CenteredContainer}
      >
        <BackButton />
        <Content />
        <ProfileButton />
        <div>Wonderful</div>
      </Grid>
    );
  });
