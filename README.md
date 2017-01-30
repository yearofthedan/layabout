# Layabout

![build_status](https://app.snap-ci.com/yearofthedan/layabout/branch/master/build_image)

Low config layout components for React.

*View the storybook demo at https://yearofthedan.github.io/layabout/*

---
**This is very much in alpha, so expect the api to shift a lot.**

## Guiding philosophy
- Be light on configuration, preferring to have new components over complex APIs. Understand usage directly from the component name rather than derived from combinations of props.  
- Aim to solve a set of common problems, not all problems and variations.
- Be light on DOM detritus. Prefer to style existing children and containers rather than to create "wrappers" which can impact accessibility.
- Inline and override styles to reduce conflicts, dependencies, and declutter class names.  

---

## Components
### FlexLayout

Lays out its children one by one according to a set of relative widths. Overflow continues onto the new row, following the same template.

`widths` (optional) set of values for sizing widths amongst the total space.

Options:
- `Array` of relative widths. e.g. [2, 3] where the first child will take up 40% and the second 60%.

If no value is provided the children will be spaced equally amongst the available space.

`container` (optional) Element to hold container styles and render children into.

Options:
- `String` representation of a HTML DOM element. e.g. "section".
- `React component type` can be either class or functional. Note that  FlexLayout provides a style prop to the container. It is up to the provided container to pass this to a child element which can render it (eg. a HTML DOM element).

If no element is provided a `div` will be rendered as the container.

`alignCrossAxis`
- Describes how to align content on the cross axis.

Options:
- `String` of one of the following: `begin`, `middle`, `end`


`gutterSpacing` TO BE IMPLEMENTED
- Spacing between content. Can be standard style units such as %, px, em.

#### Example
~~~~
<FlexLayout
  widths={[10, 13, 5]}
  gutterSpacing="2px"
  container={Article}
>
  <section></section>
  <section></section>
  <section></section>
</FlexLayout>
~~~~

In the example above the sections would have spacing of 10/28ths, 13/28ths, and 5/28ths of the total available width.

### SpacedLayout
Lays out its children within the space available with any remaining spacing allocated according to the spacing property.

`spacing` (optional) describes where to allocate remaining space.

Options:
- `String` of one of the following: `between`, `around`, `begin`, `end`, `middle`

If no value is provided spacing will be allocated to `between`.

`container` (optional) Element to hold container styles and render children into.

Options:
- `String` representation of a HTML DOM element. e.g. "section".
- `React component type` can be either class or functional. Note that  FlexLayout provides a style prop to the container. It is up to the provided container to pass this to a child element which can render it (eg. a HTML DOM element).

If no element is provided a `div` will be rendered as the container.

`alignCrossAxis`
- Describes how to align content on the cross axis.

Options:
- `String` of one of the following: `begin`, `middle`, `end`



#### Example
~~~~
<SpacedLayout
  spacing="between"
  container={Article}
>
  <section></section>
  <section></section>
  <section></section>
</SpacedLayout>
~~~~

In the example above any remaining spacing would be divided between the children.

---
## Future
- allow transposition
- think about whether we could incorporate media queries in some way  
- consider what level of historical/cross-browser support we want to provide
