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

    describe('style prop', () => {
      it('passes any styles through to the container', () => {
        const container = shallow(<Grid style={{ color: 'blue' }} />).find('div');

        expect(container).toHaveStyle('color', 'blue');
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

    it('passes any other props to the container', () => {
      const container = shallow(<Grid name="some-name" />).find('div');

      expect(container).toHaveProp('name', 'some-name');
    });
  });

  describe('layout', () => {
    it('parses a grid area from the layout', () => {
      const rendered = shallow(
        <Grid
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

  describe('columnGap', () => {
    it('defaults to nothing', () => {
      const rendered = shallow(<Grid />);

      expect(rendered.find('div')).toHaveStyle('gridColumnGap', undefined);
    });

    it('passes a string as the gap', () => {
      const rendered = shallow(<Grid template="p" columnGap="10px" />);

      expect(rendered.find('div')).toHaveStyle('gridColumnGap', '10px');
    });
  });

  describe('rowGap', () => {
    it('defaults to nothing', () => {
      const rendered = shallow(<Grid />);

      expect(rendered.find('div')).toHaveStyle('gridRowGap', undefined);
    });

    it('passes a string as the gap', () => {
      const rendered = shallow(<Grid template="p" rowGap="10px" />);

      expect(rendered.find('div')).toHaveStyle('gridRowGap', '10px');
    });
  });


  describe('widths', () => {
    it('maps basic 1 dim array with no units to use fr', () => {
      const container = shallow(<Grid widths={[1, 4, 1]} />).find('div');

      expect(container).toHaveStyle('gridTemplateColumns', '1fr 4fr 1fr');
    });

    it('only appends the unit for numbers', () => {
      const container = shallow(<Grid
        widths={[1, 1, '100px']}
      />).find('div');

      expect(container).toHaveStyle('gridTemplateColumns', '1fr 1fr 100px');
    });
  });

  describe('heights', () => {
    it('maps basic 1 dim array with no units to use fr', () => {
      const container = shallow(<Grid heights={[1, 1, 1]} />).find('div');

      expect(container).toHaveStyle('gridTemplateRows', '1fr 1fr 1fr');
    });

    it('only appends the unit for numbers', () => {
      const container = shallow(<Grid
        heights={[1, 1, '100px']}
      />).find('div');

      expect(container).toHaveStyle('gridTemplateRows', '1fr 1fr 100px');
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
    describe('when a template is provided', () => {
      it('only binds the gridArea to recognised elements', () => {
        const rendered = shallow(
          <Grid
            layout={
              `
              textarea input
            `
            }
          >
            <textarea />
            <p />
            <input />
          </Grid>,
        );

        expect(rendered.find('textarea')).toHaveStyle('gridArea', 'textarea');
        expect(rendered.find('input')).toHaveStyle('gridArea', 'input');
        expect(rendered.find('p')).not.toHaveStyle('gridArea', 'p');
      });
    });
  });
});
