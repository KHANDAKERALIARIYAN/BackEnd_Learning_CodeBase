const lodash = require ('lodash');

const names = ['alice', 'bob', 'charlie', 'david', 'eve'];

const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);