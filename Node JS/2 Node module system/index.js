// module.export --> export
// require --> import

const firstModule = require('./firstModule');

// console.log(firstModule.sum(10, 5)); 
// console.log(firstModule.substract(10, 5));
// console.log(firstModule.multiply(10, 5));
// console.log(firstModule.divide(10, 5));

try{
    console.log("Trying to divide by zero...");
    let result = firstModule.divide(10, 0);
    console.log(result);
}catch(error){
    console.log(error);
}