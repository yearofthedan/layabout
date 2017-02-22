import { Children, cloneElement } from 'react';

const deriveFlex = (index, sizes, childrenCount = 1) => {
  const sizeCount = sizes.length;
  const totalSize = sizes.reduce((total, curr) => curr + total, 0);

  if (sizeCount === 0) {
    return 100 / childrenCount;
  }
  return (sizes[index % sizeCount] * 100) / totalSize;
};

const applyLayoutConstraints = (children, sizes) => Children.toArray(children)
  .map((child, index) => cloneElement(child, {
    style: {
      ...child.props.style,
      flex: `0 0 ${deriveFlex(index, sizes, children.length)}%`,
    },
    key: index,
  }));

export default applyLayoutConstraints;
