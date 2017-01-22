import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { FlexLayout, SpacedLayout } from '../../src';

export default storiesOf('Examples', module)
  .add('Nav bar', () => (
    <section>
      <SpacedLayout>
        <FlexLayout>
          <a>Home</a>
          <a>Latest news</a>
          <a>FAQs</a>
          <a>Contact</a>
        </FlexLayout>
        <a>Logout</a>
      </SpacedLayout>
    </section>
  ));
