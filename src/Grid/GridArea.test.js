import React from 'react';
import GridArea from './GridArea';

describe('<GridArea />', () => {
  describe('container', () => {
    describe('default behaviour', () => {
      let container;

      beforeEach(() => {
        container = shallow(<GridArea />).find('div');
      });

      it('renders a div for a container', () => {
        expect(container).toExist();
      });

      it('applies a grid display', () => {
        expect(container).toHaveStyle('display', 'grid');
      });
    });

    describe('style prop', () => {
      it('passes any styles through to the container', () => {
        const container = shallow(<GridArea style={{ color: 'blue' }} />).find('div');

        expect(container).toHaveStyle('color', 'blue');
      });
    });

    describe('container template', () => {
      it('renders a provided dom element as the container', () => {
        const container = shallow(<GridArea container="section" />).find('section');

        expect(container).toExist();
      });

      it('renders a provided react element as the container', () => {
        const SampleComponent = () => <div />;
        const container = shallow(<GridArea container={SampleComponent} />).find(SampleComponent);

        expect(container).toExist();
      });
    });
  });

  describe('layout', () => {
    it('parses a grid area from the layout', () => {
      const rendered = shallow(
        <GridArea
          layout={
            `
              CancelButton ContinueButton
            `
          }
        />,
      );
      expect(rendered.find('div')).toHaveStyle('gridTemplateAreas', '"CancelButton ContinueButton"');
    });
  });

  describe('widths', () => {
    it('maps basic 1 dim array with no units to use fr', () => {
      const container = shallow(<GridArea widths={[1, 4, 1]} />).find('div');

      expect(container).toHaveStyle('gridTemplateColumns', '1fr 4fr 1fr');
    });

    it('only appends the unit for numbers', () => {
      const container = shallow(<GridArea
        widths={[1, 1, '100px']}
      />).find('div');

      expect(container).toHaveStyle('gridTemplateColumns', '1fr 1fr 100px');
    });
  });

  describe('heights', () => {
    it('maps basic 1 dim array with no units to use fr', () => {
      const container = shallow(<GridArea heights={[1, 1, 1]} />).find('div');

      expect(container).toHaveStyle('gridTemplateRows', '1fr 1fr 1fr');
    });

    it('only appends the unit for numbers', () => {
      const container = shallow(<GridArea
        heights={[1, 1, '100px']}
      />).find('div');

      expect(container).toHaveStyle('gridTemplateRows', '1fr 1fr 100px');
    });
  });

  describe('children', () => {
    describe('default behaviour', () => {
      it('renders any children', () => {
        const rendered = shallow(
          <GridArea>
            <div id="div1" />
            <div id="div2" />
          </GridArea>,
        );

        expect(rendered.find('#div1')).toExist();
        expect(rendered.find('#div2')).toExist();
      });
    });
    describe('when a template is provided', () => {
      it('only binds the gridArea to recognised elements', () => {
        const rendered = shallow(
          <GridArea
            layout={
              `
              button input
            `
            }
          >
            <button />
            <p />
            <input />
          </GridArea>,
        );

        expect(rendered.find('button')).toHaveStyle('gridArea', 'button');
        expect(rendered.find('input')).toHaveStyle('gridArea', 'input');
        expect(rendered.find('p')).not.toHaveStyle('gridArea', 'p');
      });
    });
  });
});
