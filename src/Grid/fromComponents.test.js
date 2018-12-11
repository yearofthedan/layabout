import React from 'react';
import fromComponents from './fromComponents';

describe('fromComponents', () => {
  it('resolves functional component display names', () => {
    const MyComponent = () => <div />;

    const result = fromComponents`
          .                .           ${MyComponent}
          ${MyComponent}   div         .`;

    expect(result).toEqual(`
          .                .           MyComponent
          MyComponent   div         .`);
  });

  it('resolves class component display names', () => {
    class AllClass {
      render() {
        return <div />;
      }
    }

    const result = fromComponents`
          .                .           ${AllClass}
          ${AllClass}   div         .`;

    expect(result).toEqual(`
          .                .           AllClass
          AllClass   div         .`);
  });
});
