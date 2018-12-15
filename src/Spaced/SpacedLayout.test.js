import React from 'react';
import SpacedLayout from './SpacedLayout';

describe('<SpacedLayout />', () => {
  describe('container', () => {
    describe('default behaviour', () => {
      let container;

      beforeEach(() => {
        container = shallow(<SpacedLayout />).find('div');
      });

      it('renders a div for a container', () => {
        expect(container).toExist();
      });

      it('applies a flex display', () => {
        expect(container).toHaveStyle('display', 'flex');
      });

      it('aligns its content on the cross axis in the center', () => {
        expect(container).toHaveStyle('alignItems', 'center');
      });

      it('aligns its content on the main axis with between spacing', () => {
        expect(container).toHaveStyle('justifyContent', 'space-between');
      });

      it('sets a flex-direction of row', () => {
        expect(container).toHaveStyle('flexDirection', 'row');
      });
    });

    describe('container template', () => {
      it('renders a provided dom element as the container', () => {
        const container = shallow(
          <SpacedLayout container="section" />,
        ).find('section');
        expect(container).toExist();
      });

      it('renders a provided react element as the container', () => {
        const SampleComponent = () => <div />;
        const container = shallow(
          <SpacedLayout container={SampleComponent} />,
        ).find(SampleComponent);
        expect(container).toExist();
      });
    });

    describe('style prop', () => {
      it('passes any styles through to the container', () => {
        const container = shallow(<SpacedLayout style={{ color: 'blue' }} />).find('div');

        expect(container).toHaveStyle('color', 'blue');
      });
    });

    describe('spacing', () => {
      it('applies a justify-content flex-start for start', () => {
        const container = shallow(<SpacedLayout spacing="start" />).first();
        expect(container).toHaveStyle('justifyContent', 'flex-start');
      });

      it('applies a justify-content center for center', () => {
        const container = shallow(<SpacedLayout spacing="center" />).first();
        expect(container).toHaveStyle('justifyContent', 'center');
      });

      it('applies a justify-content flex-end for end', () => {
        const container = shallow(<SpacedLayout spacing="end" />).first();
        expect(container).toHaveStyle('justifyContent', 'flex-end');
      });

      it('applies a justify-content space-between for between', () => {
        const container = shallow(<SpacedLayout spacing="between" />).first();
        expect(container).toHaveStyle('justifyContent', 'space-between');
      });

      it('applies a justify-content space-around for around', () => {
        const container = shallow(<SpacedLayout spacing="around" />).first();
        expect(container).toHaveStyle('justifyContent', 'space-around');
      });

      it('applies a justify-content space-between for unknown values', () => {
        const container = shallow(<SpacedLayout spacing="unknown" />).first();
        expect(container).toHaveStyle('justifyContent', 'space-between');
      });
    });

    describe('align cross axis', () => {
      it('applies a align-items start for start', () => {
        const container = shallow(<SpacedLayout alignCrossAxis="start" />).first();
        expect(container).toHaveStyle('alignItems', 'flex-start');
      });
      it('applies a align-items center for center', () => {
        const container = shallow(<SpacedLayout alignCrossAxis="center" />).first();
        expect(container).toHaveStyle('alignItems', 'center');
      });
      it('applies a align-items end for end', () => {
        const container = shallow(<SpacedLayout alignCrossAxis="end" />).first();
        expect(container).toHaveStyle('alignItems', 'flex-end');
      });
      it('applies a align-items center for unknown values', () => {
        const container = shallow(<SpacedLayout alignCrossAxis="unknown" />).first();
        expect(container).toHaveStyle('alignItems', 'center');
      });
    });
  });

  describe('direction', () => {
    it('applies a provided direction to flexDirection', () => {
      const container = shallow(<SpacedLayout direction="column" />).first();
      expect(container).toHaveStyle('flexDirection', 'column');
    });
  });

  describe('children', () => {
    it('renders a single child', () => {
      const rendered = shallow(
        <SpacedLayout>
          <div id="div1" />
        </SpacedLayout>,
      );
      expect(rendered.find('#div1')).toExist();
    });

    it('renders multiple children', () => {
      const rendered = shallow(
        <SpacedLayout>
          <div id="div1" />
          <div id="div2" />
        </SpacedLayout>,
      );
      expect(rendered.find('#div1')).toExist();
      expect(rendered.find('#div2')).toExist();
    });

    it('preserves existing styles', () => {
      const rendered = shallow(
        <SpacedLayout>
          <div style={{ color: 'red' }} id="div1" />
        </SpacedLayout>,
      );
      expect(rendered.find('#div1')).toHaveStyle('color', 'red');
    });
  });
});
