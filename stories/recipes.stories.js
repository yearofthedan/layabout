import React from 'react';
import { storiesOf } from '@storybook/react';
import { GridArea, fromComponents } from '../src/Grid';

const Page = ({ style, children }) => <article style={{ height: '100vh', ...style }}>{children}</article>;
const Block = ({ style, children }) => (
  <div style={{
    height: '75px', borderStyle: 'dashed', boxSizing: 'border-box', ...style,
  }}
  >
    {children}
  </div>
);

export default storiesOf('Recipes', module)
  .add('some search page', () => {
    const MenuHeader = ({ style }) => <Block style={{ ...style }}>MenuHeader</Block>;
    const Logo = ({ style }) => <Block style={{ ...style }}>Logo</Block>;
    const Search = ({ style }) => <Block style={{ ...style }}>Search</Block>;
    const Languages = ({ style }) => <Block style={{ ...style }}>Languages</Block>;
    const Footer = ({ style }) => <Block style={{ ...style }}>Footer</Block>;

    return (
      <GridArea
        widths={[1, 4, 1]}
        heights={['auto']}
        layout={fromComponents`
          ${MenuHeader} ${MenuHeader}   ${MenuHeader}
          .             ${Logo}         .
          .             ${Search}       .
          .             ${Languages}    .
          .             .               .
          ${Footer}     ${Footer}       ${Footer}
       `}
        container={Page}
      >
        <MenuHeader />
        <Logo />
        <Search />
        <Languages />
        <Footer />
      </GridArea>
    );
  })
  .add('some search results page', () => {
    const MenuHeader = ({ style }) => <Block style={{ height: '100px', ...style }}>MenuHeader</Block>;
    const Filters = ({ style }) => <Block style={{ height: '100%', ...style }}>Filters</Block>;
    const ResultList = ({ style }) => <Block style={{ height: '100%', ...style }}>ResultList</Block>;
    const ResultCard = ({ style }) => <Block style={{ height: '300px', ...style }}>ResultCard</Block>;
    const Footer = ({ style }) => <Block style={{ ...style }}>Footer</Block>;

    return (
      <GridArea
        widths={[1, 'minmax(300px, 500px)', 'minmax(200px, 300px)', 2]}
        heights={['100px', '50px', 1, '100px']}
        layout={fromComponents`
          ${MenuHeader} ${MenuHeader}   ${MenuHeader}  ${MenuHeader}
          .             ${Filters}      .              .
          .             ${ResultList}   ${ResultCard}  .
          ${Footer}     ${Footer}       ${Footer}      ${Footer}
       `}
        container={Page}
      >
        <MenuHeader />
        <Filters />
        <ResultList />
        <ResultCard />
        <Footer />
      </GridArea>
    );
  });
