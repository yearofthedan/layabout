import { Children, cloneElement, isValidElement } from 'react';

const deriveFlex = (index, sizes, childrenCount = 1) => {
  const sizeCount = sizes.length;
  const totalSize = sizes.reduce((total, curr) => curr + total, 0);

  if (sizeCount === 0) {
    return 100 / childrenCount;
  }
  return (sizes[index % sizeCount] * 100) / totalSize;
};

const applyLayoutConstraints = (children, sizes) => Children.toArray(children)
  .filter(isValidElement)
  .map((child, index, { length }) => cloneElement(child, {
    style: {
      ...child.props.style,
      flex: `0 0 ${deriveFlex(index, sizes, length)}%`,
    },
    key: index,
  }));

export default applyLayoutConstraints;
