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
  });

  describe('children', () => {
    describe('default behaviour', () => {
      it('renders any children', () => {
        const rendered = shallow(<Grid>
          <div id="div1" />
          <div id="div2" />
        </Grid>);

        expect(rendered.find('#div1')).toExist();
        expect(rendered.find('#div2')).toExist();
      });
    });
  });
});
