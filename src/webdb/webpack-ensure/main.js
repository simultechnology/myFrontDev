var a = require('./module-a');
var b = require('./module-b');

console.log(a);
console.log(b);

document.getElementById('load-c').addEventListener('click', function() {
  require.ensure(['./module-c'], function(require) {
    var c = require("./module-c");
    console.log(c);
  });
}, false);
