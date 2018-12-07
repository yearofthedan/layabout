import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ container: Container, children }) => (
  Container
    ? (
      <Container>
        {children}
      </Container>
    )
    : (
      <div>
        {children}
      </div>
    )
);

Grid.propTypes = () => ({
  container: PropTypes.element,
});

export default Grid;
