import React from 'react';
import { shallow } from 'enzyme';
import { FlexLayout } from '../';

describe('container', () => {
  describe('default behaviour', () => {
    let container;

    beforeEach(() => {
      container = shallow(<FlexLayout />).find('div');
    });

    it('renders a div for a container', () => {
      expect(container).toBePresent();
    });

    it('applies a flex display', () => {
      expect(container).toHaveStyle('display', 'flex');
    });

    it('aligns its content on the cross axis in the center', () => {
      expect(container).toHaveStyle('alignItems', 'center');
    });

    it('overflows its content to the next row', () => {
      expect(container).toHaveStyle('flexWrap', 'wrap');
    });
  });

  describe('container template', () => {
    it('renders a provided dom element as the container', () => {
      const container = shallow(
        <FlexLayout container="section" />,
      ).find('section');
      expect(container).toBePresent();
    });

    it('renders a provided react element as the container', () => {
      const SampleComponent = () => <div />;
      const container = shallow(
        <FlexLayout container={SampleComponent} />,
      ).find(SampleComponent);
      expect(container).toBePresent();
    });

    it('does not render the container or children if the container type is invalid', () => {
      const container = shallow(
        <FlexLayout container="tht" />,
      ).find('tht');
      expect(container).not.toBePresent();
    });
  });
});

describe('children', () => {
  it('renders a single child', () => {
    const rendered = shallow(
      <FlexLayout>
        <div id="1" />
      </FlexLayout>,
    );
    expect(rendered.find('#1')).toBePresent();
  });

  it('renders multiple children', () => {
    const rendered = shallow(
      <FlexLayout>
        <div id="1" />
        <div id="2" />
      </FlexLayout>,
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
        <FlexLayout>
          <div style={{ color: 'red' }} id="1" />
          <SampleComponent id="2" />
        </FlexLayout>);
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

  describe('widths', () => {
    it('gives each child the flexBasis for its position', () => {
      const rendered = shallow(
        <FlexLayout widths={[4, 2, 1, 3]}>
          <div id="1" />
          <div id="2" />
          <div id="3" />
          <div id="4" />
        </FlexLayout>);
      expect(rendered.find('#1')).toHaveStyle('flexBasis', '40%');
      expect(rendered.find('#2')).toHaveStyle('flexBasis', '20%');
      expect(rendered.find('#3')).toHaveStyle('flexBasis', '10%');
      expect(rendered.find('#4')).toHaveStyle('flexBasis', '30%');
    });

    it('repeats as though on a new row when there are more children than widths', () => {
      const rendered = shallow(
        <FlexLayout widths={[5, 3, 2]}>
          <div id="1" />
          <div id="2" />
          <div id="3" />
          <div id="4" />
          <div id="5" />
          <div id="6" />
        </FlexLayout>);
      expect(rendered.find('#1')).toHaveStyle('flexBasis', '50%');
      expect(rendered.find('#4')).toHaveStyle('flexBasis', '50%');
      expect(rendered.find('#5')).toHaveStyle('flexBasis', '30%');
      expect(rendered.find('#6')).toHaveStyle('flexBasis', '20%');
    });
  });
});
