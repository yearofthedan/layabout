import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { GridArea, fromComponents } from '../src/Grid';

const Block = ({ style, children }) => (
  <div style={{
    height: '75px', borderStyle: 'dashed', boxSizing: 'border-box', ...style,
  }}
  >
    {children}
  </div>
);

export default storiesOf('GridArea', module)
  .addDecorator(withKnobs)
  .add('using fromComponents', () => {
    const BackButton = ({ style }) => <Block style={{ backgroundColor: 'lightblue', ...style }}>Back Button</Block>;
    const ProfileButton = ({ style }) => <Block style={{ backgroundColor: 'yellowgreen', ...style }}>Profile Button</Block>;
    const Content = ({ style }) => <Block style={{ backgroundColor: 'red', ...style }}>Content</Block>;

    return (
      <GridArea
        widths={['33%', 'auto', '100px']}
        heights={['100px']}
        layout={fromComponents`
          .                .          ${BackButton}
          ${Content}       ${Content} ${Content}
          ${ProfileButton} div        .
       `}
      >
        <BackButton />
        <Content />
        <ProfileButton />
        <div>Wonderful</div>
      </GridArea>
    );
  });
