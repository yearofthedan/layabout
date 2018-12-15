# Layabout
[![Build Status](https://circleci.com/gh/yearofthedan/layabout.svg?style=svg)](https://circleci.com/gh/yearofthedan/layabout)

Low config layout components for React.

*View the storybook demo at https://yearofthedan.github.io/layabout/*

---

Issues and contributions are welcome. Specifics on how and the guiding philosophy are under [CONTRIBUTING.md](https://github.com/yearofthedan/layabout/blob/master/CONTRIBUTING.md).

**This is very much in alpha, so expect the api to shift a lot.**

---

## Components
### FlexRow / FlexColumn

Lays out its children one by one according to a set of relative sizes. Overflow continues onto the new row/column, following the same template.

`sizes` (optional) set of values for sizing sizes amongst the total space.

Options:
- `Array` of relative sizes. e.g. [2, 3] where the first child will take up 40% and the second 60%.

If no value is provided the children will be spaced equally amongst the available space.

`container` (optional) Element to hold container styles and render children into.

Options:
- `String` representation of a HTML DOM element. e.g. "section".
- `React component type` can be either class or functional. Note that FlexRow and FlexColumn provide a style prop to the container. It is up to the provided container to pass this to a child element which can render it (eg. a HTML DOM element).

If no element is provided a `div` will be rendered as the container.

`alignCrossAxis`
- Describes how to align content on the cross axis.

Options:
- `String` of one of the following: `start`, `center  `, `end`



#### Example
~~~~
<FlexRow
  sizes={[10, 13, 5]}
  container={Article}
>
  <section></section>
  <section></section>
  <section></section>
</FlexRow>
~~~~

In the example above the sections would have spacing of 10/28ths, 13/28ths, and 5/28ths of the total available width.

### SpacedColumn / SpacedRow
Lays out its children within the space available with any remaining spacing allocated according to the spacing property.

`spacing` (optional) describes where to allocate remaining space.

Options:
- `String` of one of the following: `between`, `around`, `start`, `end`, `center  `

If no value is provided spacing will be allocated to `between`.

`container` (optional) Element to hold container styles and render children into.

Options:
- `String` representation of a HTML DOM element. e.g. "section".
- `React component type` can be either class or functional. Note that  FlexRow / FlexColumn provides a style prop to the container. It is up to the provided container to pass this to a child element which can render it (eg. a HTML DOM element).

If no element is provided a `div` will be rendered as the container.

`alignCrossAxis`
- Describes how to align content on the cross axis.

Options:
- `String` of one of the following: `start`, `center  `, `end`



#### Example
~~~~
<SpacedRow
  spacing="between"
  container={Article}
>
  <section></section>
  <section></section>
  <section></section>
</SpacedRow>
~~~~

In the example above any remaining spacing would be divided between the children.

---
## Future
- think about whether we could incorporate media queries in some way  
- consider what level of historical/cross-browser support we want to provide
