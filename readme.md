```
npm install
bin/start
open http://localhost:8000/
```

Results in the error:
```
bundle.js:9 Uncaught TypeError: Cannot assign to read only property 'top' of object '#<Window>'
```

Offending code:

``` javascript
'use strict';

var slice = Array.prototype.slice;

var identity = function(x) {
  return x;
};

var top = 1; // <-- Right here
var right = 2;
var bottom = 3;
var left = 4;
var epsilon = 1e-6;
```
