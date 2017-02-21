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

  describe('align cross axis', () => {
    it('applies a align-items start for begin', () => {
      const container = shallow(<FlexLayout alignCrossAxis="begin" />).first();
      expect(container).toHaveStyle('alignItems', 'flex-start');
    });
    it('applies a align-items center for middle', () => {
      const container = shallow(<FlexLayout alignCrossAxis="middle" />).first();
      expect(container).toHaveStyle('alignItems', 'center');
    });
    it('applies a align-items end for end', () => {
      const container = shallow(<FlexLayout alignCrossAxis="end" />).first();
      expect(container).toHaveStyle('alignItems', 'flex-end');
    });
    it('applies a align-items center for unknown values', () => {
      const container = shallow(<FlexLayout alignCrossAxis="unknown" />).first();
      expect(container).toHaveStyle('alignItems', 'center');
    });
  });
});

describe('children', () => {
  describe('default behaviour', () => {
    it('applies a flex basis to fit a single child across the full row', () => {
      const rendered = shallow(<FlexLayout><div id="1" /></FlexLayout>);
      expect(rendered.find('#1')).toHaveStyle('flex', '0 0 100%');
    });

    it('applies a flex basis to fit the children evenly in one row', () => {
      const rendered = shallow(
        <FlexLayout>
          <div id="1" />
          <div id="2" />
        </FlexLayout>,
      );
      expect(rendered.find('#1')).toHaveStyle('flex', '0 0 50%');
      expect(rendered.find('#2')).toHaveStyle('flex', '0 0 50%');
    });

    it('preserves existing styles', () => {
      const rendered = shallow(<FlexLayout><div id="1" style={{ color: 'red' }} /></FlexLayout>);
      expect(rendered.find('#1')).toHaveStyle('color', 'red');
    });
  });

  describe('widths', () => {
    it('gives each child the flexBasis for its position', () => {
      const rendered = shallow(
        <FlexLayout widths={[5, 3, 2]}>
          <div id="1" />
          <div id="2" />
          <div id="3" />
        </FlexLayout>);
      expect(rendered.find('#1')).toHaveStyle('flex', '0 0 50%');
      expect(rendered.find('#2')).toHaveStyle('flex', '0 0 30%');
      expect(rendered.find('#3')).toHaveStyle('flex', '0 0 20%');
    });

    it('derives an empty array as even flex for all children', () => {
      const rendered = shallow(
        <FlexLayout widths={[]}>
          <div id="1" />
          <div id="2" />
        </FlexLayout>);
      expect(rendered.find('#1')).toHaveStyle('flex', '0 0 50%');
      expect(rendered.find('#2')).toHaveStyle('flex', '0 0 50%');
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
      expect(rendered.find('#1')).toHaveStyle('flex', '0 0 50%');
      expect(rendered.find('#4')).toHaveStyle('flex', '0 0 50%');
      expect(rendered.find('#5')).toHaveStyle('flex', '0 0 30%');
      expect(rendered.find('#6')).toHaveStyle('flex', '0 0 20%');
    });
  });
});
