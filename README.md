# Collide.js
##### A library for collision detection
##

### Usage
To use this plugin, add this code to your `head` tag:
```html
<script src="https://cdn.jsdelivr.net/gh/Kaamkiya/Collide.js/Collide.min.js"></script>
```
##

### How to use

The format for detecting collisions is
```js
Collide.shape1.shape2([required, parameters, for, shape1], [required, parameters, for, shape2])
```

##### Available shapes:
`tri`
`rect`
`circle`
`point`
`line`

##### Required parameters:
`tri`: [x1, y1, x2, y2, x3, y3]
`rect`: [x, y, w, h]
`circle`: [x, y, r]
`point`: [x, y]
`line`: [x1, y1, x2, y2]
