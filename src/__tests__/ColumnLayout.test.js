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

  describe('container template', () => {
    it('renders a provided dom element as the container', () => {
      const container = shallow(
        <ColumnLayout container="section" />,
      ).find('section');
      expect(container).toBePresent();
    });

    it('renders a provided react element as the container', () => {
      const SampleComponent = () => <div />;
      const container = shallow(
        <ColumnLayout container={SampleComponent} />,
      ).find(SampleComponent);
      expect(container).toBePresent();
    });

    it('does not render the container or children if the container type is invalid', () => {
      const container = shallow(
        <ColumnLayout container="tht" />,
      ).find('tht');
      expect(container).not.toBePresent();
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

    it('applies a flex basis to fit the children evenly in one row', () => {
      expect(child1).toHaveStyle('flexBasis', '50%');
      expect(child2).toHaveStyle('flexBasis', '50%');
    });

    it('preserves existing styles', () => {
      expect(child1).toHaveStyle('color', 'red');
    });
  });

  describe('columns', () => {
    it('gives each child the flexBasis for its column index', () => {
      const rendered = shallow(
        <ColumnLayout columns={[4, 2, 1, 3]}>
          <div id="1" />
          <div id="2" />
          <div id="3" />
          <div id="4" />
        </ColumnLayout>);
      expect(rendered.find('#1')).toHaveStyle('flexBasis', '40%');
      expect(rendered.find('#2')).toHaveStyle('flexBasis', '20%');
      expect(rendered.find('#3')).toHaveStyle('flexBasis', '10%');
      expect(rendered.find('#4')).toHaveStyle('flexBasis', '30%');
    });

    it('repeats as though on a new row when there are more children than columns', () => {
      const rendered = shallow(
        <ColumnLayout columns={[5, 3, 2]}>
          <div id="1" />
          <div id="2" />
          <div id="3" />
          <div id="4" />
          <div id="5" />
          <div id="6" />
        </ColumnLayout>);
      expect(rendered.find('#1')).toHaveStyle('flexBasis', '50%');
      expect(rendered.find('#4')).toHaveStyle('flexBasis', '50%');
      expect(rendered.find('#5')).toHaveStyle('flexBasis', '30%');
      expect(rendered.find('#6')).toHaveStyle('flexBasis', '20%');
    });
  });
});
