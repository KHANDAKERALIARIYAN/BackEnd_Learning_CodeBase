console.log("Node module Wrapper Explorer ... ");

console.log("Node module Wrapper Explorer __dirname ... ", __dirname);
console.log("Node module Wrapper Explorer __filename ... ", __filename);

module.exports.greet = function(name) {
    console.log( `Hello ${name}` );
}