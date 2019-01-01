# Layabout  
[![Build Status](https://circleci.com/gh/yearofthedan/layabout.svg?style=svg)](https://circleci.com/gh/yearofthedan/layabout)  
  
Low config layout components for React.  
  
*View the storybook demo at https://yearofthedan.github.io/layabout/*  
  
---  
  
Issues and contributions are welcome. Specifics on how and the guiding philosophy are under [CONTRIBUTING.md](https://github.com/yearofthedan/layabout/blob/master/CONTRIBUTING.md).  
  
**This is very much in alpha, so expect the api to shift a lot.**  
  
---  
  
## Components  
### Grid
Lays out children according to a defined grid structure

|Prop   | Description | Options |Default  |
|-------|-------------|---------|---------|
|container|Element to hold container styles and render children into. | Any string representing a HTML DOM element (eg. `div`) or a React component. For React components the style prop __must__ be received by the container and passed to an underlying DOM element to render it (eg. a HTML DOM element).  |generates a `div`|
|widths|An array of column widths|String values will be mapped directly to css so feel free to use things like minmax(). If an integer is given it will be mapped as an fr unit.|`['auto']`
|heights|An array of row heights|String values will be mapped directly to css so feel free to use things like minmax(). If an integer is given it will be mapped as an fr unit.|`['auto']`
|columnGap|The gap or gutter between each column|A string property to be mapped directly as css (eg.`4px`)|_none_
|rowGap|The gap or gutter between each row|A string property to be mapped directly as css (eg.`4px`)|_none_
|style|Style properties to be applied to the container. This particularly supports use cases where you're combining layout components.|A style object|_none_
|layout|A template expressing the entries in the grid. See _below_ for some advice on use|A multiline string where each line represents one row in the grid and each line contains the list of elements at each column position. Use the child component name, or a `.` to denote an empty cell. If a component is named multiple times it means that the component takes up multiple cells. |Empty layout, meaning the children will flow into the provided column and row structure defined by the `widths` and `heights` props

Any other props are passed through to the container.

**Hey! Some things to think about with the layout prop**
The magic of Grid is in the binding between the template as described in the layout prop and the children.

#### 1. everything needs to have a unique name
If you have multiple same named elements - lets us div as an example - as children there's no way to define different div sections in the template since you should just write 'div'. 
To avoid this you should wrap them in a uniquely named component (nb. this is more semantic anyway).
Alternatively, you can just not use the template prop, in which case the elements will just flow across the rows and columns.

#### 2. use `fromComponents` for safety
The renderer will try to connect the display name of the element to the token in the layout string. 
A few things can interfere here, particularly minimisation steps in your build which may mean that the child elements display name is no longer the same as what you wrote in the template. 
To get around this you can import and use `fromComponents` and refer to the components in the template directly. This will map any provided components to their actual display name at run time.

#### Usage  
```javascript
import {fromComponents} from 'layabout';
<Grid  
  widths={[1, 4, 1]}  
  heights={['100px', 'minmax(100px, 200px)', '100px', 'auto', '50px']}  
  layout={fromComponents`  
   ${MenuHeader} ${MenuHeader}   ${MenuHeader}
   .             ${LogoSection}  .
   .             ${Search}       .
   .             .               .
   ${Footer}     ${Footer}       ${Footer}  
 `}  
  container={Page}  
>  
 <MenuHeader />
 <LogoSection />
 <Search />
 <Footer />
</Grid>
```

### FlexRow / FlexColumn  
  
Lays out its children one by one according to a set of relative sizes. Overflow continues onto the new row/column, following the same template.  
    
|Prop   | Description | Options |Default  |
|-------|-------------|---------|---------|
|sizes|Set of relative weights for the amount of space available to children on a row| An array of numbers for the row|Children will share available space equally |
|container|Element to hold container styles and render children into. | Any string representing a HTML DOM element (eg. `div`) or a React component. For React components the style prop __must__ be received by the container and passed to an underlying DOM element to render it (eg. a HTML DOM element).  |generates a `div`|
|alignCrossAxis|How to align content on the cross axis|`start`,`middle`, `end` | `middle`
|style|Style properties to be applied to the container. This particularly supports use cases where you're combining layout components.|A style object|_none_
  
#### Usage  
```javascript  
<FlexRow  
 sizes={[2, 4, 4]} container={Article}>  
 <section />
 <section />
 <section />
</FlexRow>  
```  
  
In the example above the sections would have spacing of 2/10ths, 4/10ths, and 4/10ths of the total available width.  
  
### SpacedColumn / SpacedRow  
Lays out children within the space available. Any remaining spacing is allocated according to the spacing prop.  

|Prop   | Description | Options |Default  |
|-------|-------------|---------|---------|
|spacing|How to allocate remaining space| `between`, `around`, `start`, `middle`, `end` |`between`|
|container|Element to hold container styles and render children into. | Any string representing a HTML DOM element (eg. `div`) or a React component. For React components the style prop __must__ be received by the container and passed to an underlying DOM element to render it (eg. a HTML DOM element).  |generates a `div`|
|alignCrossAxis|How to align content on the cross axis|`start`, `middle`, `end` | `middle`
|style|Style properties to be applied to the container. This particularly supports use cases where you're combining layout components.|A style object|_none_
  
#### Usage  
```javascript  
<SpacedRow spacing="between" container={MyCustomContainer}>  
 <section />
 <section />
 <section />
</SpacedRow>  
```   
---  
