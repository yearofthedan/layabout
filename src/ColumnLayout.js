import React from 'react';

const styles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
};

const ColumnLayout = ({ children }) => (
  <section
    style={styles}
  >
    {children}
  </section>
);

export default ColumnLayout;
