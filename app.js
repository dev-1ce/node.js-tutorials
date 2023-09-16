const ad = require('lodash');
const items = [ 1,[2,[3,[4]]]];
const newitem = ad.flattenDeep(items);
console.log(newitem);