# Animations

## Overview

Angular's animation system lets you build animations that run with the same kind of native performance found in pure 
CSS animations. You can also tightly integrate your animation logic with the rest of your application code, for ease 
of control.

See: https://angular.io/guide/animations

## States and transitions

Angular animations are defined as logical states and transitions between states.

### The wildcard state '*'

The `*` ("wildcard") state matches **any** animation state. This is useful for defining styles and transitions that 
apply regardless of which state the animation is in. For example:

- The `active => *` transition applies when the element's state changes from `active` to anything else.
- The `* => *` transition applies when **any** change between two states takes place.

### The 'void' state

The special state called `void` can apply to any animation. It applies when the element is not attached to a view, 
perhaps because it has not yet been added or because it has been removed. The `void` state is useful for defining 
enter and leave animations.

#### Example: Entering and leaving

Using the `void` and `*` states you can define transitions that animate the entering and leaving of elements:

Enter: `void => *`
Leave: `* => void`

These two common animations have their own aliases:

```
transition(':enter', [ ... ]); // void => *
transition(':leave', [ ... ]); // * => void
```

## Animatable properties and units

Since Angular's animation support builds on top of Web Animations, you can animate any property that the browser 
considers animatable. This includes positions, sizes, transforms, colors, borders, and many others. The W3C maintains
 a list of animatable properties on its CSS Transitions page.

##### References:

- https://www.w3.org/TR/css-transitions-1/#animatable-properties
- https://www.w3.org/TR/css-transitions-1/
