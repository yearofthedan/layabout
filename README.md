# Layabout

![build_status](https://app.snap-ci.com/yearofthedan/layabout/branch/master/build_image)

Simple layout components for React.

## Philosophy
- Be light on configuration, preferring to have new components over complex APIs. Understand usage directly from the component name rather than derived from combinations of props.  
- Aim to solve a set of common problems, not all problems and variations.
- Be light on DOM detritus. Prefer to style existing children and containers rather than to create "wrappers" which can impact accessibility.
- Inline and override styles to reduce conflicts, dependencies, and declutter class names.  

## Components
### ColumnLayout

Lays out its children one by one according to a set of relative column widths. Overflow continues onto the new row, following the same template.

`columns` (optional) set of values for sizing columns amongst the total space.

Options:
- `Array` of relative column sizes. e.g. [2, 3] where the first column will take up 40% and the second 60%.

If no value is provided the children will be spaced equally amongst the available space.

`container` (optional) Element to hold container styles and render children into.

Options:
- `String` representation of a HTML DOM element. e.g. "section".
- `React component type` can be either class or functional. Note that  ColumnLayout provides a style prop to the container. It is up to the provided container to pass this to a child element which can render it (eg. a HTML DOM element).

If no element is provided a `div` will be rendered as the container.


`gutterSpacing` TO BE IMPLEMENTED
- Spacing between columns. Can be standard style units such as %, px, em.

#### Example
~~~~
<ColumnLayout
  columns={[10, 13, 5]}
  gutterSpacing="2px"
  container={Article}
>
  <section></section>
  <section></section>
  <section></section>
</ColumnLayout>
~~~~

In the example above the sections would have spacing of 10/28ths, 13/28ths, and 5/28ths of the total available width.

### Future
- pass multiple layouts and the ability to switch. Useful for media queries.  
