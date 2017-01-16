# Layabout

![build_status](https://app.snap-ci.com/yearofthedan/layabout/branch/master/build_image)

Simple layout components for React.
Designed to solve common problems, not all problems.

This is most definitely a WIP so is more like a set of notes at the moment

## Key features

- Style hooks (to avoid wrapping children in a thousand divs to style them)
- Container hook (to set a template container element)
- CSS3 under the hood

### First couple:

`ColumnLayout`
- define a set of relative column sizes
- define a gutter spacing (could be single at first and later...)
- define gutter spacing units
- overflow behaviour (?)

~~~~
<ColumnLayout columns={[10, 13, 5]} gutterSpacing="2" gutterSpacing="px" container={Article}>
  <section></section>
  <section></section>
  <section></section>
</ColumnLayout>
~~~~

In the example the first section would have a flow-basis of 10/28, the second = 13/28, and the third of 5/28.

Children are laid out in line with the columns. Default overflow continues spacing on the next line.

`GridLayout`
- define a set of column sizes
- define a maximum row width
- define a gutter spacing
- set units

Children are laid out in line with the columns and move to the row as space runs out.

`EvenSpacedLayout`
- define a gutter spacing
- set units


### Future
- pass multiple layouts and the ability to switch. Useful for media queries.  
