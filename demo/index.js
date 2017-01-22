import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { FlexLayout, SpacedLayout } from '../src';

const Block = ({ style, children }) =>
  <div style={{ height: '100px', borderStyle: 'dashed', boxSizing: 'border-box', ...style }}>{children}</div>;

const Container = ({ style, children }) =>
  <section style={{ height: '200px', border: 'solid', ...style }}>{children}</section>;

storiesOf('FlexLayout', module)
  .add('default widths', () => (
    <FlexLayout>
      <Block style={{ backgroundColor: 'lightblue' }}>Col 1</Block>
      <Block style={{ backgroundColor: 'yellowgreen' }}>Col 2</Block>
    </FlexLayout>
  ))
  .add('align cross axis', () => (
    <section>
      <FlexLayout container={Container} alignCrossAxis="begin">
        <Block style={{ backgroundColor: 'yellowgreen' }}>Col 1</Block>
      </FlexLayout>
      <FlexLayout container={Container} alignCrossAxis="middle">
        <Block style={{ backgroundColor: 'yellowgreen' }}>Col 1</Block>
      </FlexLayout>
      <FlexLayout container={Container} alignCrossAxis="end">
        <Block style={{ backgroundColor: 'yellowgreen' }}>Col 1</Block>
      </FlexLayout>
    </section>
  ))
  .add('overflow', () => (
    <FlexLayout container="section" widths={[1, 1, 1]}>
      <Block style={{ backgroundColor: 'lightblue' }}>1</Block>
      <Block style={{ backgroundColor: 'yellowgreen' }}>2</Block>
      <Block style={{ backgroundColor: 'red' }}>3</Block>
      <Block style={{ backgroundColor: 'papayawhip' }}>4</Block>
      <Block style={{ backgroundColor: 'orange' }}>5</Block>
    </FlexLayout>
  ));
storiesOf('SpacedLayout', module)
  .add('default spacing', () => (
    <SpacedLayout>
      <Block style={{ backgroundColor: 'lightblue' }}>Col 1</Block>
      <Block style={{ backgroundColor: 'yellowgreen' }}>Col 2</Block>
    </SpacedLayout>
  ))
  .add('Layout spacing types', () => (
    <section>
      <SpacedLayout spacing="begin">
        <Block style={{ backgroundColor: 'lightblue' }}>Col 1</Block>
        <Block style={{ backgroundColor: 'yellowgreen' }}>Col 2</Block>
      </SpacedLayout>
      <SpacedLayout spacing="middle">
        <Block style={{ backgroundColor: 'lightblue' }}>Col 1</Block>
        <Block style={{ backgroundColor: 'yellowgreen' }}>Col 2</Block>
      </SpacedLayout>
      <SpacedLayout spacing="end">
        <Block style={{ backgroundColor: 'lightblue' }}>Col 1</Block>
        <Block style={{ backgroundColor: 'yellowgreen' }}>Col 2</Block>
      </SpacedLayout>
      <SpacedLayout spacing="between">
        <Block style={{ backgroundColor: 'lightblue' }}>Col 1</Block>
        <Block style={{ backgroundColor: 'yellowgreen' }}>Col 2</Block>
      </SpacedLayout>
      <SpacedLayout spacing="around">
        <Block style={{ backgroundColor: 'lightblue' }}>Col 1</Block>
        <Block style={{ backgroundColor: 'yellowgreen' }}>Col 2</Block>
      </SpacedLayout>
    </section>
  ))
  .add('align cross axis', () => (
    <section>
      <SpacedLayout container={Container} alignCrossAxis="begin">
        <Block style={{ backgroundColor: 'yellowgreen' }}>Col 1</Block>
        <Block style={{ backgroundColor: 'yellowgreen' }}>Col 2</Block>
      </SpacedLayout>
      <SpacedLayout container={Container} alignCrossAxis="middle">
        <Block style={{ backgroundColor: 'yellowgreen' }}>Col 1</Block>
        <Block style={{ backgroundColor: 'yellowgreen' }}>Col 2</Block>
      </SpacedLayout>
      <SpacedLayout container={Container} alignCrossAxis="end">
        <Block style={{ backgroundColor: 'yellowgreen' }}>Col 1</Block>
        <Block style={{ backgroundColor: 'yellowgreen' }}>Col 2</Block>
      </SpacedLayout>
    </section>
  ));

storiesOf('Examples', module)
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
