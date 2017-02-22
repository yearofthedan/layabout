import { Children, cloneElement } from 'react';

const deriveFlex = (index, widths, childrenCount = 1) => {
  const widthCount = widths.length;
  const width = widths.reduce((total, curr) => curr + total, 0);

  if (widthCount === 0) {
    return 100 / childrenCount;
  }
  return (widths[index % widthCount] * 100) / width;
};

const applyLayoutConstraints = (children, widths) => Children.toArray(children)
  .map((child, index) => cloneElement(child, {
    style: {
      ...child.props.style,
      flex: `0 0 ${deriveFlex(index, widths, children.length)}%`,
    },
    key: index,
  }));

export const POSITIONS = {
  begin: 'flex-start',
  middle: 'center',
  end: 'flex-end',
  default: 'center',
};

export default applyLayoutConstraints;
