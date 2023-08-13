# Collide.js
##### A plugin for collision detection
##

### Usage
To use this plugin, add this code to your `head` tag:
```html
<script src="https://cdn.jsdelivr.net/gh/Kaamkiya/Collide.js/Collide.js"></script>
```
##

1. ### Collide.point
   * #### .tri
     Accepts 2 parameters: `p` and `tri`.

     Returns whether the point `p` is inside `tri`.

     For example,

```js
Collide.point.tri([0, 0], [-10, -10, -30, 100, 50, -10])
```

    returns `true`, because the point is within the boundaries of the triangle. 
    
   * #### .rect
     Accepts 2 parameters: `point` and `rect`.
     
     Returns whether the point `point` is inside `rect`.

     For example,

```js
Collide.point.rect([10, 63.4], [4, 10, 50, 37])
```

    returns `false`, because the point is outside the boundaries of the rectangle. 
    
   * #### .circle
     Accepts 2 parameters: `point` and `circle`.
     
   * #### .point
     Accepts 2 parameters: `p` and `point`.
   * #### .line
     Accepts 2 parameters: `point` and `line`.
#
2. ### Collide.circle
   * #### .tri
   * #### .rect
   * #### .circle
   * #### .point
   * #### .line
#
3. ### Collide.rect
   * #### .tri
   * #### .rect
   * #### .circle
   * #### .point
   * #### .line
#
4. ### Collide.tri
   * #### .tri
   * #### .rect
   * #### .circle
   * #### .point
   * #### .line
#
5. ### Collide.line
   * #### .tri
   * #### .rect
   * #### .circle
   * #### .point
   * #### .line
