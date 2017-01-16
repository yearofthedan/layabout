import React from 'react';
import { shallow } from 'enzyme';
import { ColumnLayout } from '../';

describe('container', () => {
  it('renders a div for a container', () => {
    const container = shallow(<ColumnLayout />).find('div');
    expect(container).toBePresent();
  });

  describe('default behaviour', () => {
    let container;

    beforeEach(() => {
      container = shallow(<ColumnLayout />).find('div');
    });

    it('applies a flex display', () => {
      expect(container).toHaveStyle('display', 'flex');
    });

    it('aligns its content in the center', () => {
      expect(container).toHaveStyle('alignItems', 'center');
    });

    it('overflows its content to the next row', () => {
      expect(container).toHaveStyle('flexWrap', 'wrap');
    });
  });
});

describe('children', () => {
  it('renders a single child', () => {
    const rendered = shallow(
      <ColumnLayout>
        <div id="1" />
      </ColumnLayout>,
    );
    expect(rendered.find('#1')).toBePresent();
  });

  it('renders multiple children', () => {
    const rendered = shallow(
      <ColumnLayout>
        <div id="1" />
        <div id="2" />
      </ColumnLayout>,
    );
    expect(rendered.find('#1')).toBePresent();
    expect(rendered.find('#2')).toBePresent();
  });
  it('does not render the container or children when there are invalid children', () => {
    const rendered = shallow(
      <ColumnLayout>
        { [] }
        <div />
      </ColumnLayout>,
    );
    expect(rendered.find('div')).toBeEmpty();
  });

  describe('default behaviour', () => {
    let child1;
    let child2;
    const SampleComponent = ({ style }) => <div style={style} />;
    beforeEach(() => {
      const rendered = shallow(
        <ColumnLayout>
          <div style={{ color: 'red' }} id="1" />
          <SampleComponent id="2" />
        </ColumnLayout>);
      child1 = rendered.find('#1');
      child2 = rendered.find('#2');
    });

    it('applies the same flex to each child', () => {
      expect(child1).toHaveStyle('flexGrow', '1');
      expect(child2).toHaveStyle('flexGrow', '1');
    });

    it('preserves existing styles', () => {
      expect(child1).toHaveStyle('color', 'red');
    });
  });
});
