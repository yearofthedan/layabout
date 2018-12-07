import React from 'react';
import Grid from './Grid';

describe('<Grid />', () => {
  describe('container', () => {
    describe('default behaviour', () => {
      let container;

      beforeEach(() => {
        container = shallow(<Grid />).find('div');
      });

      it('renders a div for a container', () => {
        expect(container).toExist();
      });

      it('applies a grid display', () => {
        expect(container).toHaveStyle('display', 'grid');
      });
    });

    describe('container template', () => {
      it('renders a provided dom element as the container', () => {
        const container = shallow(<Grid container="section" />).find('section');

        expect(container).toExist();
      });

      it('renders a provided react element as the container', () => {
        const SampleComponent = () => <div />;
        const container = shallow(<Grid container={SampleComponent} />).find(SampleComponent);

        expect(container).toExist();
      });
    });

    describe('prop::template', () => {
      it('maps an empty template to no grid-template', () => {
        const container = shallow(<Grid />).find('div');

        expect(container).not.toHaveStyle('gridTemplateColumns');
        expect(container).not.toHaveStyle('grid-template-rows');
      });

      it('maps basic 1 dim array with no units to use %', () => {
        const container = shallow(<Grid
          template={[33, 33, 33]}
        />).find('div');

        expect(container).toHaveStyle('gridTemplateColumns', '33% 33% 33%');
      });

      it('only appends the unit for numbers', () => {
        const container = shallow(<Grid
          template={[33, 33, '100px']}
        />).find('div');

        expect(container).toHaveStyle('gridTemplateColumns', '33% 33% 100px');
      });

      it('it allows a label to be set against the template entry', () => {
        const container = shallow(<Grid
          template={[{ topMenuOne: '200px' }, { topMenuTwo: '30px' }, { topMenuThree: '30px' }]}
        />).find('div');

        expect(container).toHaveStyle('gridTemplateColumns', '[topMenuOne] 200px [topMenuTwo] 30px [topMenuThree] 30px');
      });
    });
  });

  describe('children', () => {
    describe('default behaviour', () => {
      it('renders any children', () => {
        const rendered = shallow(
          <Grid>
            <div id="div1" />
            <div id="div2" />
          </Grid>,
        );

        expect(rendered.find('#div1')).toExist();
        expect(rendered.find('#div2')).toExist();
      });
    });
  });
});
